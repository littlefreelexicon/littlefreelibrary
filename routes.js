const express = require('express')
const router = express.Router()
const bookController = require('./controllers/bookController')

router.route('/book')
    .post(bookController.create)

router.route('/books/:zip/:radius')
    .get(bookController.findNearby)

module.exports = router
