const express = require('express')
const router = express.Router()
const bookController = require('./controllers/bookController')
const libraryController = require('./controllers/libraryController')
const stewardController = require('./controllers/stewardController')

// Book Routing
router.post('/book', bookController.create)
router.get('/books/:zip/:radius', bookController.findNearby)

// Library Routing
router.post('/library', libraryController.create)
    .get(libraryController.findAll)
router.get('/library/:id', libraryController.findById)

// Steward Routing
router.post('/steward', stewardController.register)

module.exports = router
