const { notFoundError, unauthorizedError } = require("../../apiResonse/error");
const Messages = require("../../enum/Messages");
const { sequelize } = require("../../sequelize/index");
const bcrypt = require("bcrypt");

const updateUserInfoService = async (id, user) => {
  const { firstName, lastName, email, password } = user;

  const userFound = await sequelize.models.User.findByPk(id);
  if (!userFound) throw new notFoundError(Messages.userNotFound);

  const isPasswordMatches = await bcrypt.compare(password, userFound.password);
  if (!isPasswordMatches)
    throw new unauthorizedError("password is not correct");

  await sequelize.models.User.update(
    { firstName, lastName, email },
    { where: { id } }
  );
};
module.exports = updateUserInfoService;
