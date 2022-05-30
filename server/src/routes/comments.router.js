const { Router } = require('express');
const commentsController = require('../controllers/comments.controller.js');
const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const commentsRouter = Router();
// /comments
commentsRouter.route('/')
.get(checkAuth, commentsController.getAllComments)

Router.route('/:id')
.post(checkAuth, commentsController.addComments)

commentsRouter.route('/:id')
.delete(checkAuth, commentsController.deleteComments)

module.exports = commentsRouter;
