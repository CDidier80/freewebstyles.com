const { model } = require('mongoose')

// const UserSchema = require('./schemax/User')
// const TravelLogSchema = require('./schemax/TravelLog')
// const CommentSchema = require('./schemax/Comments')

// const User = model('users', UserSchema)
// const Comment = model('comments', CommentSchema)
// const TravelLog = model('travel_logs', TravelLogSchema)

const StyleSchema = require('./schemas/StyleSchema.js')
const UserSchema = require('./schemas/UserSchema.js')


const StyleModel = model('styles', StyleSchema)
const UserModel = model('styles', UserSchema)


module.exports = {

  UserModel,
  StyleModel,

  
}
