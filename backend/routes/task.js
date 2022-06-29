const router = require("express").Router();

const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllTasks,
} = require("../controller/task/index.js");

router.route("/create").post(createTask);
router.route("/get/:id").get(getTask);
router.route("/getAll").get(getAllTasks);
router.route("/update/:id").post(updateTask);
router.route("/delete/:id").get(deleteTask);

module.exports = router;
