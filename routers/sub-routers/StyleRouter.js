const Router = require('express').Router()
const StyleController = require('../../Controllers/StyleController')


Router.post('/StyleControllerJs/poststyle', StyleController.PostStyle)

Router.get('/StyleControllerJs/getonestyle/:style_name', StyleController.GetOneStyle)

Router.delete('/StyleControllerJs/deleteonestyle', StyleController.DeleteOneStyle)

Router.put('/StyleControllerJs/editonestyle/:style_id', StyleController.EditOneStyle)



module.exports = Router
