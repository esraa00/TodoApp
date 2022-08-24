const { forbiddenError } = require("../../apiResonse/error/forbiddenError");
const { sequelize } = require("../../sequelize/index");
const getAllTasks = async (role) => {
  if (role === "Admin") {
    return await sequelize.models.Task.findAll();
  }
  throw new forbiddenError("you are unauthorized to perform this action");
};

module.exports = getAllTasks;
