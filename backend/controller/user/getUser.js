const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const getUserService = require("../../services/user/getUser.service");
const getUser = async (req, res, next) => {
  try {
    const userFound = await getUserService(req.params.id);
    response(res, HttpStatusCode.OK, userFound);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser };
