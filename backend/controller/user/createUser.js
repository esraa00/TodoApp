const HttpStatusCode = require("../../enum/HttpStatusCode");
const Messages = require("../../enum/Messages");
const createUserService = require("../../services/user/createUser.service");
const response = require("../../apiResonse/response");
const createUser = async (req, res, next) => {
  try {
    const user = await createUserService(req.body, res.locals.role);
    response(res, HttpStatusCode.CREATED, user);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
