const express = require("express");
const router = express.Router();
const controller = require('../components/authentication/controller');

router.post('/signin', controller.signInController);
router.get('/signup', controller.signUpController);

module.exports = router;