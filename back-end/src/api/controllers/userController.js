'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

function getAllUsers(request, response) {
    User.find({}, function(err, user) {
        if (err)
            response.send(err);
        response.json(user);
    });
};

function createUser(request, response) {
    var newUser = new User(request.body);
    newUser.save(function(err, user) {
        if (err)
            response.send(err);
        response.json(user);
    });
};

function getUser(request, response) {
    User.findById(request.params.userId, function(err, user) {
        if (err)
            response.send(err);
        response.json(user);
    });
};

function updateUser(request, response) {
    if (request.body.subscription) {
        if (!Object.values(User.schema.path('subscription').enumValues).includes(request.body.subscription)) {
            response.json({message:"Invalid subscription level!"})
            return;
        }
    }

    User.findOneAndUpdate(
        { _id: request.params.userId },
        request.body,
        { new: true },
        function(err, user) {
            if (err) 
                response.send(err);
            response.json(user);
        }
    );
};

function deleteUser(request, response) {
    User.remove(
        { _id: request.params.userId },
        function(err, user) {
            if (err)
                response.send(user);
            response.json({ message: 'User successfully deleted'});
        }
    );
};

module.exports.getAllUsers = getAllUsers;
module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;