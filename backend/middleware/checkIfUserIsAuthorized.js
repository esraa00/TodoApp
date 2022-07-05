const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkIfUserIsAuthorized = (req, res, next) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken) {
      if (!refreshToken)
        return res
          .status(401)
          .send({ status: "failure", response: "please sign in first" });

      const userData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
      const { iat, exp, ...user } = userData;
      res.user = user;
      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: process.env.ACCESS_TOKEN_AGE,
      });
      res.cookie("accessToken", accessToken, {
        maxAge: eval(process.env.ACCESS_TOKEN_COOKIE_MAX_AGE),
      });
      next();
    } else {
      const userData = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
      const { iat, exp, ...user } = userData;
      res.user = user;
      next();
    }
  } catch (error) {
    return res.status(500).send({ status: "failure", response: error });
  }
};

module.exports = { checkIfUserIsAuthorized };
