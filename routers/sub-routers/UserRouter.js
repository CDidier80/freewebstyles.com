const Router = require('express').Router()
const {getToken, createToken, verifyToken} = require('../../middleware/jwthandler')

Router.post('/UserControllerJs/register', UserController.CreateUser)
Router.get('/UserControllerJs/:user_id', UserController.GetProfile)
Router.post('/UserControllerJs/login', UserController.SignInUser, createToken)
Router.get('/UserControllerJs/refresh/session/', getToken, verifyToken, UserController.RefreshSession)
module.exports = Router
