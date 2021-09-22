var express = require("express");
const accountController = require("../../../controllers/nine/account/accountController");
var router = express.Router();
//전체 조회
router.get("/", accountController.getUser);
router.post("/signup", accountController.signupUser);
router.post("/signin", accountController.signinUser);

module.exports = router;
