'use strict';

module.exports = function(app) {
    var userController = require('../controllers/userController');

    //user routes
    app.route('/users')
        .get(userController.getAllUsers)
        .post(userController.createUser);
    
    app.route('/users/:userId')
        .get(userController.getUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
};