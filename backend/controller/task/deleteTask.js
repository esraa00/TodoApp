const { sequelize } = require("../../sequelize/index");
const deleteTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const taskFound = await sequelize.models.Task.findByPk(id);

    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    const task = await sequelize.models.Task.destroy({ where: { id } });
    res
      .status(200)
      .send({ status: "success", message: "deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteTask };
