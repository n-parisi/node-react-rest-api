/**
 * Module that defines functions for processing HTTP requests to REST service and performing some operations on User object(s)
 *
 * @author Nick Parisi
 */
"use strict";

var mongoose = require("mongoose");
var User = mongoose.model("User");

/**
 * Return a list of all Users in database as a JSON response
 *
 * @param {Request} req
 * @param {Response} res
 */
function getAllUsers(req, res) {
  User.find({}, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

/**
 * Create a user from request JSON body. Return ID of newly created user as response.
 *
 * @param {Request} req
 * @param {Response} res
 */
function createUser(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user._id);
    }
  });
}

/**
 * Retrieve a user from userId parameter encoded in URL. Return user as JSON response.
 *
 * @param {Request} req
 * @param {Response} res
 */
function getUser(req, res) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

/**
 * Update a user, with userId parameter encoded in URL, with JSON request body. Return updated user as JSON response.
 *
 * @param {Request} req
 * @param {Response} res
 */
function updateUser(req, res) {
  //check to see if subscription level to be updated to is a valid subscription level (it is in User.subscription enum),
  //respond with error message if it is not.
  if (req.body.subscription) {
    var subscriptionEnum = User.schema.path("subscription").enumValues;
    if (!Object.values(subscriptionEnum).includes(req.body.subscription)) {
      res.json({ message: "Invalid subscription level!" });
      return;
    }
  }

  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true }, //so we return updated user instead of original user
    function(err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    }
  );
}

/**
 * Delete a user with given userId from database.
 *
 * @param {Request} req
 * @param {Response} res
 */
function deleteUser(req, res) {
  User.remove({ _id: req.params.userId }, function(err, user) {
    if (err) {
      res.send(user);
    }
    res.json({ message: "User successfully deleted" });
  });
}

//make controller functions accessible to importing module
module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
