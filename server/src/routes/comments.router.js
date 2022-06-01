const { Router } = require('express');
const commentsController = require('../controllers/comments.controller.js');
const checkAuth = require('../middlewares/checkAuth');
// const checkAuthor = require('../middlewares/checkAuthor');

const commentsRouter = Router();
// /comments
commentsRouter.route('/:id')
.get(commentsController.getAllComments)

commentsRouter.route('/:id')
.post(commentsController.addComments)

commentsRouter.route('/:id')
.delete(checkAuth, commentsController.deleteComments)

module.exports = commentsRouter;