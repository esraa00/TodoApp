const router = require("express").Router();
const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/task");

router.route("/add").post(createTask);
router.route("/get/:id").get(getTask);
router.route("/modify/:id").post(updateTask);
router.route("/delete/:id").get(deleteTask);

module.exports = router;
