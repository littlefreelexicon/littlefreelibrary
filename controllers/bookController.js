const mongoose = require('mongoose')
const Library = mongoose.model('Library')

exports.homePage = (req, res) => {
  res.render('/../src/index')
}

exports.addBook = async (req, res) => {
  const book = await new Book(req.body).save()
}

exports.getBooks = async (req, res) => {}

exports.editBook = async (req, res) => {}
