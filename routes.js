const express = require('express')
const router = express.Router()
const bookController = require('./controllers/bookController')
const libraryController = require('./controllers/libraryController')
const stewardController = require('./controllers/stewardController')

// Book Routing
router.post('/book', bookController.create)
router.get('/book/:bookId', bookController.getBookDetails)
router.get('/books/', bookController.getAllBooks)

// Library Routing
router.route('/library').post(libraryController.create)

// Steward Routing
router.route('/steward').post(stewardController.register)

router.route('/books/:zip/:radius')
    .get(bookController.findNearby)

module.exports = router
