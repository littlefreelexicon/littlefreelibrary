const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bookController = require('./controllers/bookController')
const libraryController = require('./controllers/libraryController')
const stewardController = require('./controllers/stewardController')

// Book Routing
router.post('/createBook', bookController.create)
router.get('/nearbyBooks/:zip/:radius', bookController.findNearby)
router.get('/bookDetail/:bookId', bookController.getBookDetails)
router.get('/allBooks/', bookController.getAllBooks)

// Library Routing
router
  .post('/createLibrary', libraryController.create)
  .get(libraryController.findAll)
router.get('/findLibrary/:id', libraryController.findById)

// Steward Routing
router.post('/registerSteward', stewardController.register)

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

module.exports = router
