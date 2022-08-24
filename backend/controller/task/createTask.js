const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const createTaskService = require("../../services/task/createTask.service");
const createTask = async (req, res, next) => {
  try {
    const createdTask = await createTaskService(req.body);
    response(res, HttpStatusCode.CREATED, createdTask);
  } catch (error) {
    next(error);
  }
};

module.exports = { createTask };
