const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/casters', controller.getAllCasters);
router.get('/caster/:id', controller.getCasterInfo);
router.post('/caster', controller.createNewCaster);
router.post('/caster/:id', controller.editCasterInfo);
router.delete('/caster/:id',  controller.deleteCaster);

module.exports = router;