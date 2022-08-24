const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const deleteTaskService = require("../../services/task/deleteTask.service");
const deleteTask = async (req, res, next) => {
  try {
    await deleteTaskService(req.params);
    response(res, HttpStatusCode.NO_CONTENT, "task deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteTask };
