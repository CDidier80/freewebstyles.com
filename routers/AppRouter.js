const Router = require('express').Router()
const StyleRouter = require('./sub-routers/StyleRouter.js')


Router.use('/StyleRouterJs', StyleRouter)

module.exports = Router
