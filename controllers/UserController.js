const { response } = require('express')
const { User, TravelLog } = require('../db/schema')
const {checkPassword, generatePassword} = require('../middleware/PasswordHandler')

const GetProfile = async (req, res) => {
  const user = await User.findById(req.params.user_id).select('_id name')
  const posts = await TravelLog.find({ user_id: req.params.user_id })
  res.send({ user, posts })
}

const CreateUser = async (req, res) => {
  const body = req.body
  const password_digest = await generatePassword(body.password)
  const user = new User({
    name: body.name,
    email: body.email,
    password_digest
  })
  user.save()
  res.send(user)
}

const SignInUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })
  if (user && await checkPassword(req.body.password, user.password_digest)) {
    const payload = {
      _id: user._id,
      name: user.name
    }
    res.locals.payload = {_id: user._id, name: user.name}
    return next()    // you need return because otherwise the function will continue running. It WILL start the next function at the same time as finishing this one
  }
  res.status(401).send({ msg: 'Unauthorized' })
}

const RefreshSession = (req, res) => {
  const token = res.locals.token
  res.send(token)
}

module.exports = {
  GetProfile,
  CreateUser,
  SignInUser,
  RefreshSession
}
