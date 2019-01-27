const mongoose = require('mongoose')
const db = require('../models')

module.exports = {
  create: (req, res) => {
    db.Book.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },

  getBookDetails: (req, res) => {
    db.Book.findById(req.params.bookId)
      .populate('library')
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },

  getAllBooks: (req, res) => {
    db.Book.find()
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }
}
