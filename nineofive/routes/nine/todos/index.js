var express = require("express");
var router = express.Router();

const todosContorller = require("../../../controllers/nine/todos/todosController");

router.post("/", todosContorller.todoUpload);
router.get("/", todosContorller.todoLoad);
router.put("/:todosIdx", todosContorller.todoUpdate);
router.delete("/:todosIdx", todosContorller.todoDelete);

module.exports = router;
