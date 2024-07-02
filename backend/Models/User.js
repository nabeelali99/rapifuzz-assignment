const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  type: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isdCode: {
    type: Number,
    required: true,
  },
  // phoneNumber: {
  //   type: Number,
  //   required: true,
  // },
  mobileNumber: {
    type: Number,
    required: true,
  },
  fax: {
    type: Number,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
