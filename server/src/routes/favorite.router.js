const { Router } = require('express');
const favoritController = require('../controllers/favorit.controller');
const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const favoritRouter = Router();
// /favorit
favoritRouter.route('/')
.get(checkAuth, favoritController.getAll) 

favoritRouter.route('/:id')
.post(checkAuth, favoritController.addFavorit)

favoritRouter.route('/:id')
.delete(checkAuth, favoritController.deleteFavorit)

module.exports = favoritRouter;
