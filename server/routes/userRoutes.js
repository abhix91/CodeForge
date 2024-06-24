const userRoute = require("../controllers/userController");
const { asyncHandler } = require("../utils/handler");

const router = require("express").Router();

router.route("/register").post(asyncHandler(userRoute.register));
router.route("/login").post(asyncHandler(userRoute.Login));
module.exports = router;
