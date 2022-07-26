const express = require("express");
const app = express();
const router = express.Router();
const upload = require("../../middlewares/fileUpload");
const controller = require("./controller");
const { verifyToken, isAdmin } = require("../../middlewares/authJwt");

router.post(
  "/upload/image",
  [verifyToken],
  upload.single("image"),
  controller.uploadImage
);

module.exports = router;
