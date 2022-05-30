const { Router } = require('express');
const getCardsController = require('../controllers/getCards.controller')

const getCardsRouter = Router()

getCardsRouter.route('/:params')
    .get(getCardsController.getCards)

module.exports = getCardsRouter