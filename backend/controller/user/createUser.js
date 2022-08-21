const HttpStatusCode = require("../../enum/HttpStatusCode");
const Messages = require("../../enum/Messages");
const createUserService = require("../../services/user/createUser.service");
const response = require("../../apiResonse/response");
const createUser = async (req, res, next) => {
  try {
    await createUserService(req.body, res.locals.role);
    response(res, HttpStatusCode.CREATED, Messages.userCreatedSuccessfully);
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser };
