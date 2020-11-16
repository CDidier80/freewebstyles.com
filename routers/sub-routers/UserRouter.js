const Router = require('express').Router()
const {getToken, createToken, verifyToken} = require('../../middleware/jwthandler')
const UserController = require('../../Controllers/UserController')
console.log('UserRouter Reached')


// // http://localhost:3003/APImeetsServerJs/UserRouterJs/test    for test in insomnia
// Router.get('/test', (req, res) =>  res.send('UserRouter.js route works.'))
// Router.get('/UserControllerJs', (req, res) =>  res.send('UserRouter.js route works.'))


// Router.get('/UserControllerJs/createuser', (req, res) =>  res.send('UserControllerJs/createuser route works.'))
Router.post('/UserControllerJs/createuser', UserController.CreateUser)
Router.get('/UserControllerJs/getprofile/:user_id', UserController.GetProfile)
Router.post('/UserControllerJs/login', UserController.SignInUser, createToken)
Router.get('/UserControllerJs/refresh/session', getToken, verifyToken, UserController.RefreshSession)
module.exports = Router
