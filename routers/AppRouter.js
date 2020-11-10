const Router = require('express').Router()

const UserRouter = require('./sub-routers/UserRouter')
const CommentRouter = require('./sub-routers/StyleRouter')
const TravelLogRouter = require('./sub-routers/LicenseRouter')

Router.use('/users', UserRouter)
Router.use('/posts', StyleRouter)
Router.use('/comments', LicenseRouter)

module.exports = Router
