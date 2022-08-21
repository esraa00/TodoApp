const jwt = require("jsonwebtoken");
const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: process.env.REFRESH_TOKEN_AGE,
  });
};

module.exports = createRefreshToken;
