const {Router} = require('express');
const getPlaceDetails = require('../controllers/placeInfo.controller');

const placeRouter = Router();

placeRouter.post('/:id', getPlaceDetails)

module.exports = placeRouter;
//