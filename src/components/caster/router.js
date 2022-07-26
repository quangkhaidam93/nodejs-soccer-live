const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.get("/casters", controller.getAllCasters);
router.get("/caster/:id", controller.getCasterInfo);
router.post("/caster", [verifyToken, isAdmin], controller.createNewCaster);
router.post("/caster/:id", [verifyToken, isAdmin], controller.editCasterInfo);
router.delete("/caster/:id", [verifyToken, isAdmin], controller.deleteCaster);

module.exports = router;
