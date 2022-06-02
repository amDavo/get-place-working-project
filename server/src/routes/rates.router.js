const {Router} = require('express');
const addRating = require("../controllers/rating.controller");

const ratesRouter = Router();

ratesRouter.post('/', addRating.addRating)

module.exports = ratesRouter;
