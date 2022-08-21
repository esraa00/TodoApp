const router = require("express").Router();

const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controller/task/index.js");

router.route("/").post(createTask);
router.route("/").get(getAllTasks);
router.route("/:id").get(getTask);
router.route("/update/:id").post(updateTask);
router.route("/delete/:id").get(deleteTask);

module.exports = router;
