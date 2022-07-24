const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken } = require('../../middlewares/authJwt');

router.get('/users', controller.getAllUsers)
router.get('/user/:username', [verifyToken], controller.getUserInfo);
router.put('/user/:id', controller.editUserInfo);

module.exports = router;