const express = require('express')
const router = express.Router()
const bookController = require('./controllers/bookController')

router.route('/book')
    .post(bookController.create)

module.exports = router
