'use strict';// With strict mode, you can not, for example, use undeclared variables.

module.exports = function(app) { //whatever you assign to module.exports will be exposed as a module.exposes an object with the app function as a module.
	var todoList = require('../controllers/todoListController'); // imports controllers to handle requests for todo-lists and todo items under a todo-list.



	// todoList Routes, routes the app to different tasks based on methods
	app.route('/tasks')
		.get(todoList.list_all_tasks)
		.post(todoList.create_a_task);

	app.route('/tasks/:taskId')
		.get(todoList.read_a_task)
		.put(todoList.update_a_task)
		.delete(todoList.delete_a_task);
};
