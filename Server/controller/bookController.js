const Book = require('./../models/bookModel');
const fs = require('fs');

const books = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/book-sample.json`)
);

exports.getAllBooks = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    result: books.length,
    data: {
      books: books,
    },
  });
};

exports.topBooks = (req, res, next) => {};

exports.getBook = async (req, res, next) => {
  const id = req.params.id * 1;
  const book = await Book.findBy(id);
  if (!book) {
    res.status(404).json({
      status: 'failed',
      message: 'there is no book with such id',
    });
  }
};
exports.deleteBook = (req, res, next) => {
  if (req.params.id * 1 > books.length - 1) {
    res.status(404).json({
      status: 'Failed',
      message: 'Invalid ID',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      book: null,
    },
  });
};
exports.createNewBook = (req, res, next) => {};
