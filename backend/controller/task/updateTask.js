const { models } = require("../../sequelize/index");
const updateTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { taskName, taskDescription, isCompleted } = req.body;

    const taskFound = await models.Task.findOne({ where: { id } });
    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    const updatedTask = await models.Task.update(
      { taskName, taskDescription, isCompleted },
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
