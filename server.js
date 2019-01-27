const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const routes = require('./routes.js')

const PORT = process.env.PORT || 3001
const app = express()

mongoose.connect(process.env.MONGO_URI)

app.use(express.static('build'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(routes)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})