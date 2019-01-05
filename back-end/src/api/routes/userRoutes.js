/**
 * Define a function that expects an express server object and sets up routes for creating, reading, updating, and deleting User objects in the mongoose instance
 *
 * @author Nick Parisi
 */
"use strict";

module.exports = function(app) {
  var userController = require("../controllers/userController");

  //define each route and what controller function is called in response to HTTP methods
  app
    .route("/users")
    .get(userController.getAllUsers)
    .post(userController.createUser);

  app
    .route("/users/:userId")
    .get(userController.getUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
};
