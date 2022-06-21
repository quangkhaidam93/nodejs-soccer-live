const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render("index"));
router.get('/magic', (req, res) => res.render("magic"));

module.exports = router;