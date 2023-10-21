const express = require('express');
const bookController = require('./../controller/bookController');

const router = express.Router();

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(bookController.createNewBook);

router
  .route('./:id')
  .get(bookController.getBook)
  .delete(bookController.deleteBook);

module.exports = router;
