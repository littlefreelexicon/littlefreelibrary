const mongoose = require('mongoose')
const db = require('../models')

module.exports = {
  create: (req, res) => {
    db.Library.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }
}
