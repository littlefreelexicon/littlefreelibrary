const mongoose = require('mongoose')
const Steward = mongoose.model('steward')

exports.loginForm = (req, res) => {
  res.render('login')
}

exports.registerForm = (req, res) => {
  res.render('register')
}
