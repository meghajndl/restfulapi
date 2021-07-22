'use strict';// With strict mode, you can not, for example, use undeclared variables.

//importing mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // defining the schema, defines the shape of the documents within that collection.


// add a schema to another schema
var TaskSchema = new Schema({
  name: {
    type: String,//assigning type of string to field name
    Required: 'Kindly enter the name of the task' //it is required field & the error message when not entered 
  },
  Created_date: {
    type: Date, //assigning type of date to field Created_date
    default: Date.now // by the default the date will be current date 
  },
  status: {
    type: [{
      type: String, //type of field status will be string 
      enum: ['pending', 'ongoing', 'completed'] //records multiple options present for status
    }],
    default: ['pending'] //default is pending
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);// Schema are the description of the data, Model kind of represent your collection. You can have multiple Model having the same Schema. To create new documents, or to get documents from database, you need to use Model.