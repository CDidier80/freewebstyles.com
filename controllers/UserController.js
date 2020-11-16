const { UserModel } = require('../db/models')
const {checkPassword, generatePassword} = require('../middleware/PasswordHandler')




// up to date with mern fullstack. Back end auth should work.
const CreateUser = async (req, res) => {
  console.log('CreateUser() at controller carrying req: ', req)
  console.log(req.body)
  try {
    const body = req.body
    // the request body should use a key of "password"
    // the password value is hashed and stored as the new value of password_digest
    const password_digest = await generatePassword(body.password)
    const user = new UserModel({
      username: body.username,
      email: body.email,
      password_digest
    })
    user.save()
    res.send(user)
    console.log('User account created!!!!')
  } catch (error) {
    throw error
  }
} 


const SignInUser = async (req, res, next) => {
  console.log("SignInUser() reached in UserController.js")
  // When a user signs in, check to see if we have their username on record in db
  const user = await UserModel.findOne({ email: req.body.email })
  // If the account exists, send the password to be verified by checkPassword from
  // /middleware/passwordhandler.js, where it will be rehashed into its password_digest
  // form (our encrypted record of their password). If the hashing result matches the 
  // user-entered password, they can log in. The if-statement condition in English is
  // "if the user exists and the password they provided matches our encrypted record of
  // the correct password, they can log in."
  if (user && await checkPassword(req.body.password, user.password_digest)) {
    console.log("If statement in SignInUser reached. This means record of user was found and the password matched the password digest.")
    // store the users unique database id and their username in a variable "payload"
    const payload = {
      _id: user._id,
      username: user.username
    }

    // send the payload into res.locals
    res.locals.payload = {_id: user._id, username: user.username}
    console.log('SignInUser is adding this payload to res.locals: ', res.locals.payload)
    console.log('SignInUser now uses next() to hand payload to createToken in jtwhandler.js')
    // next() refers to the createToken() method in /middleware/jwthandler.js, which is the 2nd function to run in the UserRouter.js login post request
    return next()    // you need return because otherwise the function will continue running. It WILL start the next function at the same time as finishing this one
  }
  res.status(401).send({ msg: 'Invalid email address or password' })
}


const GetProfile = async (req, res) => {
  const user = await UserModel.findById(req.params.user_id).select('_id name')
  res.send({ user })
}

// This is the 3rd and final function called in the UserRouter.js refresh-session get request. 
// The first two functions are found in /middleware/jwthandler.js
// In UserRouter.js: Router.get('/UserControllerJs/refresh/session/', getToken, verifyToken, UserController.RefreshSession)
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
