const {Router} = require('express');
const placeInfoController = require('../controllers/placeInfo.controller');

const placeRouter = Router();

placeRouter.get('/:id', placeInfoController)

module.exports = placeRouter;
