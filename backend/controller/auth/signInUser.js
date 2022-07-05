const { models } = require("../../sequelize/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await models.User.findOne({ where: { email } });
    if (!userFound)
      return res
        .status(404)
        .send({ status: "failure", response: "user not found" });

    const isPasswordMatches = await bcrypt.compare(
      password,
      userFound.password
    );
    if (!isPasswordMatches)
      return res
        .status(401)
        .send({ status: "failure", response: "password is not correct" });

    const user = {
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
    };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {
      expiresIn: process.env.ACCESS_TOKEN_AGE,
    });

    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY, {
      expiresIn: process.env.REFRESH_TOKEN_AGE,
    });

    res
      .cookie("accessToken", accessToken, {
        maxAge: eval(process.env.ACCESS_TOKEN_COOKIE_MAX_AGE),
      })
      .cookie("refreshToken", refreshToken, {
        maxAge: eval(process.env.REFRESH_TOKEN_COOKIE_MAX_AGE),
      })
      .send({ status: "success", response: "success" });
  } catch (error) {
    res.status(500).send({ status: "failure", response: error });
  }
};
module.exports = { signInUser };
