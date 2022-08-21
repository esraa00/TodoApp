const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const getAllUsersService = require("../../services/user/getAllUsers.service");

const getAllUsers = async (req, res, next) => {
  try {
    const usersFound = await getAllUsersService(req.locals.role);
    return response(res, HttpStatusCode.OK, usersFound);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers };
