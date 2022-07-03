const { models } = require("../../sequelize/index");
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await models.Task.findAll();
    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks };
