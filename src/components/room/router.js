const express = require("express");
const router = express.Router();
const controller = require('./controller');
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.get('/rooms', controller.getRooms);
router.get('/room/:id', controller.getRoomInfo);
router.post('/room', [verifyToken, isAdmin], controller.createNewRoom);
router.post('/room/:id', [verifyToken, isAdmin], controller.editRoomInfo);
router.delete('/room/:id', [verifyToken, isAdmin], controller.deleteRoom);

module.exports = router;