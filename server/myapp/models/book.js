const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  content: { type: String, required: true, default: "" },
  wordnumb: {type: Number, default: 0},
  userid: { type: String, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;