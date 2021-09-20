var express = require("express");
var router = express.Router();

const boardController = require("../../../controllers/nine/board/boardController");

router.post("/", boardController.postUpload);
router.get("/", boardController.postLoad);
router.get("/:idx", boardController.postLoad);
router.delete("/:idx", boardController.postDelete);

module.exports = router;
