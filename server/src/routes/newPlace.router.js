const {Router} = require('express')
const newPlaceController = require('../controllers/newPlace.controller')
const upload = require("../middlewares/imageUpload");

const newPlaceRouter = Router()

// '/newPlace'
newPlaceRouter.post('/', upload.single('image'), newPlaceController)


module.exports = newPlaceRouter