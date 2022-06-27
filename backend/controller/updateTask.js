const Task = require("../models/task");
const updateTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { taskName, taskDescription } = req.body;
    const taskFound = await Task.findOne({ where: { id } });
    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    const updatedTask = await Task.update(
      { taskName, taskDescription },
      { where: { id } }
    );

    res
      .status(200)
      .send({ status: "success", message: "updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { updateTask };
