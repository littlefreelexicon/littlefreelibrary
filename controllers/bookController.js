const mongoose = require('mongoose')
const db = require('../models')
const fetch = require('node-fetch')

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
      .populate('library')
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },
    
  findNearby: (req, res) => {
    const googleBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?'
    fetch(`${googleBaseUrl}address=${req.params.zip}&key=${process.env.GOOGLE_API_KEY}`)
      .then(googleRes => googleRes.json())
      .then(json => {
        let lat = json.results[0].geometry.location.lat
        let lng = json.results[0].geometry.location.lng
        db.Library.find({ location: { $geoWithin: { $centerSphere: [ [ lng, lat ], req.params.radius / 3963.2 ] } } })
          .then(data => res.json(data))
          .catch(err => res.status(400).json(err))
      })
  }
}
