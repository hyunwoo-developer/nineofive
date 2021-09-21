var express = require("express");
const accountController = require("../../../controllers/nine/account/accountController");
var router = express.Router();

router.post("/signup", accountController.signupUser);
router.post("/signin", accountController.signinUser);

module.exports = router;
