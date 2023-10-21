const User = require('./../models/userModel');

exports.getAllUsers = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Here is the  user route',
  });
};
// exports.getUser = (req, res, next) => {};
exports.createNewUser = (req, res, next) => {};
// exports.deleteUser = (req, res, next) => {};
// exports.updateUser = (req, res, next) => {};
