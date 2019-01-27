const mongoose = require('mongoose')
const Schema = mongoose.Schema

const librarySchema = new Schema({
  libraryId: Number,
  libraryName: String,
  charterNumber: Number,
  steward: {
    type: Schema.Types.ObjectId,
    ref: 'Steward'
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ],
  photo: String,
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number],
    address: String
  }
})

module.exports = mongoose.model('Library', librarySchema)
