const { sequelize } = require("../../sequelize/index");
const {
  notFoundError,
  forbiddenError,
} = require("../../apiResonse/error/notFoundError");
const deleteTaskService = async (taskInformation) => {
  const { taskId, userId } = taskInformation;

  const taskFound = await sequelize.models.Task.findByPk(taskId);
  if (!taskFound.userId === userId)
    throw new forbiddenError("you are unauthorized to perform this task");

  if (!taskFound) throw new notFoundError("task not found");

  await sequelize.models.Task.destroy({ where: { id } });
};

module.exports = deleteTaskService;
