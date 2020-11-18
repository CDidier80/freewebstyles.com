const Router = require('express').Router()
const StyleController = require('../../Controllers/StyleController')

Router.get('/test', (req, res) => res.send("StyleRouter.js reached by way of APImeetsServerJs --> AppRouterJs/StyleRouter --> test"))
Router.post('/StyleControllerJs/poststyle', StyleController.PostStyle)
// get style methods
Router.get('/StyleControllerJs/getonestyle/:style_name', StyleController.GetOneStyle)
Router.get('/StyleControllerJs/getManyRecentStyles/:numToGet', StyleController.GetManyRecentStyles)
Router.get('/StyleControllerJs/getusersrecentstyles/:currentUser/:numToGet', StyleController.GetUsersRecentStyles)
Router.get('/StyleControllerJs/getmanylikedstyles/:currentUser/:numToGet', StyleController.GetManyLikedStyles)
// edit and delete
Router.delete('/StyleControllerJs/deleteonestyle/:style_name', StyleController.DeleteOneStyle)
Router.put('/StyleControllerJs/editonestyle/:original_style_name', StyleController.EditOneStyle)

module.exports = Router
