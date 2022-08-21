const jwt = require("jsonwebtoken");
const createAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: process.env.ACCESS_TOKEN_AGE,
  });
};

module.exports = createAccessToken;
