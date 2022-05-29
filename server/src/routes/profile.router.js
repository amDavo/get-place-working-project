const { Router } = require('express');
const  profileController= require('../controllers/profile.controller');
const checkAuth = require('../middlewares/checkAuth');


const profileRouter = Router();

profileRouter.route('/')
    .post(profileController.getInfoProfile);

module.exports = profileRouter;