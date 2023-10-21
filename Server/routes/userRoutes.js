const express = require('express');
const userController = require('./../controller/userController');
// const authController = require('./../controller/authController');

const router = express.Router();

// router.post('/signUp');
// router.post('/login');
// router.post('/forgotPassword');
// router.patch('/resetPassword');
// router.patch('/updatePassword');

// router.patch('/deleteMe');
// router.delete('/deleteMe');

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createNewUser);
// router
//   .route('/:id')
//   .get(userController.getUser)
//   .patch(userController.updateUser)
//   .delete(userController.deleteUser);
module.exports = router;
