const Router = require('express').Router()
const StyleRouter = require('./sub-routers/StyleRouter.js')
const UserRouter = require('./sub-routers/UserRouter.js')

Router.get('/test', (req, res) =>  res.send('AppRouter.js route works'))
Router.use('/StyleRouterJs', StyleRouter)
Router.use('/UserRouterJs', UserRouter)

module.exports = Router
