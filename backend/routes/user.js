const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
  updateUser,
} = require("../controller/user/index.js");

router.route("/create").post(createUser);
router.route("/get/:id").get(getUser);
router.route("/delete/:id").get(deleteUser);
router.route("/getAll").get(getAllUsers);
router.route("/update/:id").post(updateUser);
module.exports = router;
