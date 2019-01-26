const mongoose = require('mongoose')
const db = require('../models')

module.exports = {
  register: (req, res) => {
    db.Steward.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  }
}
