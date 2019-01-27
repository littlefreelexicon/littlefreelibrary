const mongoose = require('mongoose')
const db = require('../models')
const fetch = require('node-fetch')

module.exports = {
  create: (req, res) => {
    db.Book.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(400).json(err))
  },
  findNearby: (req, res) => {
    console.log(req.params.zip)
    console.log(req.params.radius)
    // first get lat, lon for zipcode from google
    const googleBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?'
    fetch(`${googleBaseUrl}address=${req.params.zip}&key=${process.env.GOOGLE_API_KEY}`)
      .then(res => res.json())
      .then(json => {
        let lat = json.results[0].geometry.location.lat
        let lng = json.results[0].geometry.location.lng
        db.Library
          .find({
            // loc: {
            //   $geoWithin: { $centerSphere: [ [-93.277647, 44.91816], req.params.radius / 3959 ] }
            // }
          })
          .then(data => res.json(data))
          .catch(err => res.status(400).json(err))
      })
    // db.Book
    //   .find({})
    //   .then(data => res.json(data))
    //   .catch(err => res.status(400).json(err))

    // db.places.find( {
    //   loc: { $geoWithin: { $centerSphere: [ [ -88, 30 ], 10/3963.2 ] } }
    // } ) 


    // res.json(req.params)
  }
}
