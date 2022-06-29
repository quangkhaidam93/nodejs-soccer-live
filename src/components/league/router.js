const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/league', controller.getAllLeagues);
router.get('/league/:id', controller.getLeagueInfo);
router.post('/league', controller.createNewLeague);
router.post('/league/:id', controller.editLeagueInfo);
router.delete('/league/:id',  controller.deleteLeague);

module.exports = router;