const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.get('/leagues', controller.getAllLeagues);
router.get('/league/:id', controller.getLeagueInfo);
router.post('/league', [verifyToken, isAdmin], controller.createNewLeague);
router.post('/league/:id', [verifyToken, isAdmin], controller.editLeagueInfo);
router.delete('/league/:id', [verifyToken, isAdmin], controller.deleteLeague);

module.exports = router;