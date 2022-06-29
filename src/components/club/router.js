const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/club', controller.getAllClubs);
router.get('/club/:id', controller.getClubInfo);
router.post('/club', controller.createNewClub);
router.post('/club/:id', controller.editClubInfo);
router.delete('/club/:id',  controller.deleteClub);

module.exports = router;