const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  phonenumber: String, //String because the number needs to be '+1213123'
  groupsIn: Array
})
module.exports = mongoose.model('user', userSchema,'users')
