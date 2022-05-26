const { Router } = require('express');
const usersController = require('../controllers/users.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');

const usersRouter = Router();

usersRouter.get('/', checkAuth, usersController.getAllUsers);
usersRouter.route('/:id')
  .get(checkAuth, usersController.getUser);

module.exports = usersRouter;
