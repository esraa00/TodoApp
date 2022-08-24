const { sequelize } = require("../../sequelize/index");
const {
  notFoundError,
  unprocessableEntityError,
} = require("../../apiResonse/error/index");
const Messages = require("../../enum/Messages");
const bcrypt = require("bcrypt");
const createAccessToken = require("../../helper/createAccessToken");
const createRefreshToken = require("../../helper/createRefreshToken");

const signInService = async (userToBeSignedIn) => {
  const { email, password } = userToBeSignedIn;

  const userFound = await sequelize.models.User.findOne({
    where: { email },
  });

  if (!userFound) throw new notFoundError(Messages.emailNotFound);

  const isPasswordMatches = await bcrypt.compare(password, userFound.password);

  if (!isPasswordMatches)
    throw new unprocessableEntityError(Messages.passwordIsNotCorrect);

  const accessToken = createAccessToken(userFound.id);

  const refreshToken = createRefreshToken(userFound.id);

  return {
    accessToken,
    refreshToken,
    user: userFound.removeAttribute("password"),
  };
};

module.exports = signInService;
