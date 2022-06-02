const {Router} = require('express');
const addRating = require("../controllers/rating.controller");

const ratesRouter = Router();

ratesRouter.post('/', addRating)

module.exports = ratesRouter;
