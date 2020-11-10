const { model } = require('mongoose')

const UserSchema = require('./schemax/User')
const TravelLogSchema = require('./schemax/TravelLog')
const CommentSchema = require('./schemax/Comments')

const User = model('users', UserSchema)
const Comment = model('comments', CommentSchema)
const TravelLog = model('travel_logs', TravelLogSchema)

module.exports = {
  User,
  Comment,
  TravelLog
}
