const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stewardSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  library: {
    type: Schema.Types.ObjectId,
    ref: 'Library'
  }
})

const steward = mongoose.model('Steward', stewardSchema)

module.exports = steward
