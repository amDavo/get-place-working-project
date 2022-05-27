const {Router} = require('express')
const newPlaceController = require('../controllers/newPlace.controller')

const newPlaceRouter = Router()

// '/newPlace'
newPlaceRouter.post('/add', newPlaceController)

module.exports = newPlaceRouter