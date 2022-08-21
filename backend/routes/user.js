const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
  updateUserInfo,
  updateUserPass,
} = require("../controller/user/index.js");

router.route("/").post(createUser);
router.route("/").get(getAllUsers);
router.route("/:id").get(getUser);
router.route("/delete").post(deleteUser);
router.route("/updateInfo/:id").post(updateUserInfo);
router.route("/updatePass/:id").post(updateUserPass);

module.exports = router;
