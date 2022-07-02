const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/rooms', controller.getRooms);
router.get('/room/:id', controller.getRoomInfo);
router.post('/room', controller.createNewRoom);
router.post('/room/:id', controller.editRoomInfo);
router.delete('/room/:id',  controller.deleteRoom);

module.exports = router;