/**
 * Defines a mongoose schema for a simple User object that represents a hypothetical user account on some website.
 *
 * username: this user's account name
 * birthday: user's birthday (required for sign up)
 * subscription: account level for some site feature subscription
 *
 * @author Nick Parisi
 */
"use strict";

var mongoose = require("mongoose");
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
    enum: ["Silver", "Gold", "Platinum"],
    default: "Silver"
  }
});

//when this module is imported, add UserSchema to mongoose instance
module.exports = mongoose.model("User", UserSchema);
