const Task = require("../models/task");
const createTask = async (req, res, next) => {
  const { taskName, taskDescription, isCompleted } = req.body;
  try {
    const createdTask = await Task.create({
      taskName,
      taskDescription,
      isCompleted,
    });

    res
      .status(200)
      .send({ status: "success", message: "created task successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTask };
