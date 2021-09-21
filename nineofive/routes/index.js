var express = require("express");
var router = express.Router();

const accountRouter = require("../routes/nine/account/index");
const boardRouter = require("../routes/nine/board/index");
const galleryRouter = require("../routes/nine/gallery/index");
const todosRouter = require("../routes/nine/todos/index");
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.use("/account", accountRouter);
router.use("/board", boardRouter);
router.use("/gallery", galleryRouter);
router.use("/todos", todosRouter);
module.exports = router;
