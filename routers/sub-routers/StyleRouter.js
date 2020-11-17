const Router = require('express').Router()
const StyleController = require('../../Controllers/StyleController')



Router.get('/test', (req, res) => res.send("StyleRouter.js reached by way of APImeetsServerJs --> AppRouterJs/StyleRouter --> test"))

// Router.get('/StyleControllerJs/editonestyle/test', (req, res) => res.send("StyleRouter.js reached by way of APImeetsServerJs --> AppRouterJs/StyleRouter --> /StyleControllerJs/test"))



Router.post('/StyleControllerJs/poststyle', StyleController.PostStyle)

// get style methods
Router.get('/StyleControllerJs/getonestyle/:style_name', StyleController.GetOneStyle)
Router.get('/StyleControllerJs/getManyRecentStyles/:numToGet', StyleController.GetManyRecentStyles)
Router.get('/StyleControllerJs/getusersrecentstyles/:currentUser/:numToGet', StyleController.GetUsersRecentStyles)
Router.get('/StyleControllerJs/getmanylikedstyles/:currentUser/:numToGet', StyleController.GetManyLikedStyles)





Router.delete('/StyleControllerJs/deleteonestyle', StyleController.DeleteOneStyle)

Router.put('/StyleControllerJs/editonestyle/:style_id', StyleController.EditOneStyle)


// Router.get('/styles/:style_id', StyleController.GetStyle)
// Router.delete('styles/deleteone', StyleController.DeleteStyle)
// Router.put('styles/:style_id', StyleController.EditStyle)

module.exports = Router
