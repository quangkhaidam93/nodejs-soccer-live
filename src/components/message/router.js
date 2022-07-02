const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/messages', controller.getMessages);

module.exports = router;