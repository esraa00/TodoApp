const jwt = require("jsonwebtoken");
const { unauthorizedError } = require("../apiResonse/error/index");
const createAccessToken = require("../helper/createAccessToken");
const createRefreshToken = require("../helper/createRefreshToken");
const Messages = require("../enum/Messages");
const checkIfUserIsAuthenticated = (req, res, next) => {
  try {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken) {
      if (!refreshToken) throw new unauthorizedError(Messages.signInFirst);

      const { id } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
      res.locals.userId = id;

      const accessToken = createAccessToken(id);

      res.cookie("accessToken", accessToken, {
        maxAge: eval(process.env.ACCESS_TOKEN_COOKIE_MAX_AGE),
      });

      next();
    } else {
      const { id } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);

      res.locals.userId = id;
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { checkIfUserIsAuthenticated };
