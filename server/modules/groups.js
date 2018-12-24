const mongoose = require('mongoose')

const Schema = mongoose.Schema
const groupSchema = new Schema({
  admin: String,
  name: String,
  users: Array
})
module.exports = mongoose.model('group', groupSchema, 'groups')
