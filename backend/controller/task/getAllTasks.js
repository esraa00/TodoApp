const Task = require("../../sequelize/models/task");
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).send(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks };
