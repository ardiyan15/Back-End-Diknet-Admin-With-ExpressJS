'use strict';

module.exports = function(app) {
    var todoList = require('./controller/controller');

    // Index Page
    app.route('/').get(todoList.index);

    // Get All Data
    app.route('/users').get(todoList.users);

    // Get Detail User
    app.route('/users/:id').get(todoList.getDetailUserById);

    // Search Data
    app.route('/users').post(todoList.findUser);

    // Insert Data
    app.route('/users/addUser').post(todoList.createUser);

    // Update Data
    app.route('/users').put(todoList.updateUser);

    // Delete Data
    app.route('/users/').delete(todoList.deleteUser);
}