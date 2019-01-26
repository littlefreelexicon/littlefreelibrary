const express = require('express')
const mongoose = require('mongoose')
const db = require('./models')
const env = require('dotenv').load()

const PORT = process.env.PORT || 3001
const app = express()

mongoose.connect(process.env.MONGO_URI)

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})