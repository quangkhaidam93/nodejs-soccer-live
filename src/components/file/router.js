const express = require('express');
const app = express();
const router = express.Router();
const upload = require('../../middlewares/fileUpload');
const controller = require('./controller');

router.post('/upload/image', upload.single('image'), controller.uploadImage);

module.exports = router;
