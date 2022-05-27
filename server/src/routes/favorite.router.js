const { Router } = require('express');
const favoritController = require('../controllers/favorit.controller');
const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const favoritRouter = Router();

favoritRouter.route('/')
.get(checkAuth, favoritController.getAll)
.post(checkAuth, favoritController.addFavorit)

module.exports = favoritRouter;
