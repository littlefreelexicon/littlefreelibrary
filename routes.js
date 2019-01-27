const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
<<<<<<< HEAD
const bookController = require('/controllers/bookController')
const userController = require('/controllers/userController')

router.get('/')
=======
const bookController = require('./controllers/bookController')
const libraryController = require('./controllers/libraryController')
const stewardController = require('./controllers/stewardController')

// Book Routing
router.post('/book', bookController.create)
router.get('/books/:zip/:radius', bookController.findNearby)
router.get('/book/:bookId', bookController.getBookDetails)
router.get('/books/', bookController.getAllBooks)

// Library Routing
router.post('/library', libraryController.create)
    .get(libraryController.findAll)
router.get('/library/:id', libraryController.findById)

// Steward Routing
router.post('/steward', stewardController.register)
>>>>>>> master

