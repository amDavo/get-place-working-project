const { Router } = require('express');
const favoriteController = require('../controllers/favorite.controller');
const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const favoriteRouter = Router();
// /favorit
favoriteRouter.route('/')
.get(checkAuth, favoriteController.getAll)

favoriteRouter.route('/:id')
.post(checkAuth, favoriteController.addFavorite)

favoriteRouter.route('/:id')
.delete(checkAuth, favoriteController.deleteFavorite)

module.exports = favoriteRouter;
