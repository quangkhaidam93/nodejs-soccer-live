const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.get('/clubs', controller.getAllClubs);
router.get('/club/:id', controller.getClubInfo);
router.post('/club', [verifyToken, isAdmin], controller.createNewClub);
router.post('/club/:id', [verifyToken, isAdmin], controller.editClubInfo);
router.delete('/club/:id', [verifyToken, isAdmin], controller.deleteClub);

module.exports = router;