//Import the mongoose module
const mongoose = require('mongoose');

//Link we need to connect to our database. (meghajndl is username & Allinone#1 is password)
const MONGOURI = "mongodb+srv://meghajndl:Allinone#1@cluster0.uazvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        /** In real-time you'll split DB connection(into another file) away from DB calls */
        await mongoose.connect(MONGOURI, {// await on a step makes process to wait until it's done/ err'd out.
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!"); // logged in terminal when connected to DB
    } catch (e){
        console.log(e); //else catch the exception
        throw e;
    }
};

//The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = InitiateMongoServer;