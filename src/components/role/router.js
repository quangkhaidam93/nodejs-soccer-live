const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.get('/roles', [verifyToken], controller.getAllRoles);
// router.get('/user/:username', [verifyToken], controller.getUserInfo);

module.exports = router;