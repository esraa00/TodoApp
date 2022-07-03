const Task = require("../../sequelize/models/task");
const deleteTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const taskFound = await Task.findOne({ where: { id } });

    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    const task = Task.destroy({ where: { id } });
    res
      .status(200)
      .send({ status: "success", message: "deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteTask };
