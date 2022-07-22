const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/roles', controller.getAllRoles);
// router.get('/user/:username', [verifyToken], controller.getUserInfo);

module.exports = router;