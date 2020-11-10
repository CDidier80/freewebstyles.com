const Router = require('express').Router()
const LicenseController = require('../Controllers/LicenseController')

Router.post('/:license_id', LicenseController.GetLicense)
Router.get('/addlicense', LicenseController.CreateLicenseOption)

module.exports = Router
