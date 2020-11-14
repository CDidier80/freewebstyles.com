const Router = require('express').Router()
const StyleRouter = require('./sub-routers/StyleRouter.js')
const UserRouter = require('./sub-routers/StyleRouter.js')

// const UserRouter = require('./sub-routers/UserRouter')



// Router.use('/users', UserRouter)

// Router.use('/comments', LicenseRouter)

// Router.use('/AppRouterJs/test', (req, res) => res.send(
//     { msg: "AppRouter.js Reached via app.use('/APImeetsServerJs', AppRouter) --> app.get('APImeetsServerJs/AppRouterJs/test} in Server.js. When app uses a router, it uses the CRUD methods defined in the router."}))


Router.use('/AppRouterJs/StyleRouterJs', StyleRouter)
Router.use('/AppRouterJs/UserRouterJs', UserRouter)

module.exports = Router
