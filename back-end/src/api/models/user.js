'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    subscription: {
        type: String,
        enum: ['Silver', 'Gold', 'Platinum'],
        default: 'Silver'
    }
})

module.exports = mongoose.model('User', UserSchema);