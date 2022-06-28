const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken } = require('../../middlewares/authJwt');

router.get('/user/:username', [verifyToken], controller.getUserInfo);

module.exports = router;