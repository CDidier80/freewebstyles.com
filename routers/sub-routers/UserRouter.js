const Router = require('express').Router()
const UserRouter = require('./sub-routers/UserRouter')
const StyleRouter = require('./sub-routers/StyleRouter')
const LicenseRouter = require('./sub-routers/LicenseRouter')
const {getToken, createToken, verifyToken} = require('../../middleware/jwthandler')

Router.get('/:user_id', UserController.GetProfile)
Router.post('/register', UserController.CreateUser)
Router.post('/login', UserController.SignInUser, createToken)
Router.get('/refresh/session/', getToken, verifyToken, UserController.RefreshSession)
module.exports = Router
