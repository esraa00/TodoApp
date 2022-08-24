const getAllTasksService = require("../../services/task/getAllTasks.service");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const response = require("../../apiResonse/response");
const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await getAllTasksService(res.locals.role);
    response(res, HttpStatusCode.OK, tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllTasks };
