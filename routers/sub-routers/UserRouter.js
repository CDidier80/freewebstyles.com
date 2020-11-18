const Router = require('express').Router()
const {getToken, createToken, verifyToken} = require('../../middleware/jwthandler')
const UserController = require('../../Controllers/UserController')
// console.log('UserRouter Reached')

Router.post('/UserControllerJs/createuser', UserController.CreateUser)
Router.get('/UserControllerJs/getprofile/:user_id', UserController.GetProfile)
Router.post('/UserControllerJs/login', UserController.SignInUser, createToken)
Router.get('/UserControllerJs/refresh/session', getToken, verifyToken, UserController.RefreshSession)
module.exports = Router
