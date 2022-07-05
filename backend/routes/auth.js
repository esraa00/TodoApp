const router = require("express").Router();

const { signInUser } = require("../controller/auth/signInUser");
const { createUser } = require("../controller/user/index");

router.route("/signIn").post(signInUser);
router.route("/signUp").post(createUser);

module.exports = router;
