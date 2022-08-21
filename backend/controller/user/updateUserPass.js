const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const updateUserPassService = require("../../services/user/updateUserPass.service");

const updateUserPass = async (req, res, next) => {
  try {
    await updateUserPassService(req.body);
    response(res, HttpStatusCode.OK, "password updated successfully");
  } catch (error) {
    next(error);
  }
};
module.exports = { updateUserPass };
