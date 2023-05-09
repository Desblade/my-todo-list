const express = require('express');
const { userLoginValidation } = require('../validations/loginValidation');
const { userRegisterValidation } = require('../validations/registerValidation');
const { checkTokenMiddleware } = require('../middlewares/checkTokenMiddleware');
const { controllerLogin } = require('../controllers/userControllers/controllerLogin');
const { registerController } = require('../controllers/userControllers/registerController');
const { checkToken } = require('../controllers/userControllers/checkToken');
const { getResponsible } = require('../controllers/userControllers/getResponsible');
const { getManager } = require('../controllers/userControllers/getManager');

const router = express.Router();

router
    .post('/login', userLoginValidation, controllerLogin)
    .post('/register', userRegisterValidation, registerController)
    .get('/check', checkTokenMiddleware, checkToken)
    .get('/getResponsible', checkTokenMiddleware, getResponsible)
    .get('/getManager', getManager);

module.exports = router;
