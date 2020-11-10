const Router = require('express').Router()
const StyleController = require('../Controllers/StyleController')

Router.post('/styles/:style_id', StyleController.GetStyle)
Router.get('styles/contribute', StyleController.ContributeStyle)
Router.delete('styles/deleteone', StyleController.DeleteStyle)
Router.put('styles/:style_id', StyleController.EditStyle)

module.exports = Router
