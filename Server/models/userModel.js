const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A user must have name'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  email: {
    type: String,
    require: [true, 'A user must have email'],
    unique: true,
    lowercase: true,
    vaildate: [validator.isEmail, 'please provide valid mail'],
  },
  password: {
    type: String,
    require: [true, 'A user must have password'],
    minLength: [8, 'Password must be greater than 8 characters'],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm password'],
    validate: {
      // This only work on CREATE or SAVEE..................
      validator: function (val) {
        return val === this.password;
      },
      message: 'passwordConfirm should be same as original password',
    },
  },
  passwordChangedAt: { type: Date },
  photo: {
    type: String,
  },
  passwordResetToken: String,
  passwordTokenExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
