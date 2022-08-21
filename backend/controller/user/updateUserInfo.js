const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const updateUserInfoService = require("../../services/user/updateUserInfo.service");

const updateUserInfo = async (req, res, next) => {
  try {
    await updateUserInfoService(id, req.body);
    response(res, HttpStatusCode.OK, "user updated successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserInfo };
