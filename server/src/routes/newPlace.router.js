const {Router} = require('express')
const path = require('path')
const newPlaceController = require('../controllers/newPlace.controller')
const upload = require("../middlewares/imageUpload");

const newPlaceRouter = Router()

// '/newPlace'
newPlaceRouter.post('/', upload.single('myImg'), newPlaceController)


module.exports = newPlaceRouter
