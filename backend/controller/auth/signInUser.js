const response = require("../../apiResonse/response");
const HttpStatusCode = require("../../enum/HttpStatusCode");
const Messages = require("../../enum/Messages");
const signInService = require("../../services/auth/signInUser.service");
const signInUser = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = await signInService(req.body);

    res.cookie("accessToken", accessToken, {
      maxAge: eval(process.env.ACCESS_TOKEN_COOKIE_MAX_AGE),
    });

    res.cookie("refreshToken", refreshToken, {
      maxAge: eval(process.env.REFRESH_TOKEN_COOKIE_MAX_AGE),
    });
    response(res, HttpStatusCode.OK, Messages.userSignedInSuccessfully);
  } catch (error) {
    next(error);
  }
};
module.exports = { signInUser };
