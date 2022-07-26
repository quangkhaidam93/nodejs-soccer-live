const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken, isAdmin } = require('../../middlewares/authJwt');

router.get('/users', [verifyToken, isAdmin], controller.getAllUsers)
router.get('/user/:username', [verifyToken, isAdmin], controller.getUserInfo);
router.put('/user/:id', [verifyToken, isAdmin], controller.editUserInfo);

module.exports = router;