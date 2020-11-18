const { model } = require('mongoose')

const StyleSchema = require('./schemas/StyleSchema.js')
const UserSchema = require('./schemas/UserSchema.js')

const StyleModel = model('styles', StyleSchema)
const UserModel = model('users', UserSchema)

module.exports = {
  UserModel,
  StyleModel,
}
