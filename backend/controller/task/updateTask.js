const { sequelize } = require("../../sequelize/index");
const updateTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const { taskName, taskDescription, isCompleted } = req.body;

    const taskFound = await sequelize.models.Task.findByPk();
    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    const updatedTask = await sequelize.models.Task.update(
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
