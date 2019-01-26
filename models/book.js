const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  author: String,
  genres: [String],
  isbn: String,
  isAvailable: Boolean,
  dateAdded: {
    type: Date,
    default: Date.now
  },
  library: {
    type: Schema.Types.ObjectId,
    ref: 'Library'
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
