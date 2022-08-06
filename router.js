const express = require('express');
const router = express.Router();
const homepage = require('./src/controllers/homepage')
const registerUser = require('./src/controllers/createUser');
const {verifysession} = require('./src/middlewares/middlewareGlobal');

router.get('/',verifysession,homepage.homepage);


router.get('/register/user', registerUser.register);
router.post('/register/receive',registerUser.receive);
router.get('/user/login',registerUser.login);
router.post('/login/receive', registerUser.receiveLogin);
router.get('/login/logout', registerUser.logout);

module.exports = router;