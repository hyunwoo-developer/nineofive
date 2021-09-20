var express = require("express");
const galleryController = require("../../../controllers/nine/gallery/galleryController");
var router = express.Router();
const upload = require("../../../modules/awsUpload");

router.post("/", upload.single("img"), galleryController.imgUpload);
router.get("/", galleryController.imgLoad);

module.exports = router;
