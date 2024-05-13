const { SignUp, SignIn } = require("../controllers/userController");

const router=require("express").Router();

router.post("/signup",SignUp);
router.post("/signin",SignIn);

module.exports = router;