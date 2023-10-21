const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A book must have name'],
    unique: true,
  },
  author: {
    type: String,
    required: [true, 'A book must have author'],
  },
  quote: {
    type: String,
  },
  price: {
    type: Number,
    require: [true, 'A book must have price'],
  },
  priceDiscount: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price;
      },
      message: 'Discount price should be below regular prize',
    },
  },
  description: {
    type: String,
    required: [true, 'A book must have description'],
  },
  editors: {
    type: String,
    required: [true, 'A book must have editors'],
  },
  language: {
    type: String,
    required: [true, 'A book must have specific language'],
  },
  paperback: {
    type: String,
    required: true,
  },
  image: String,
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
