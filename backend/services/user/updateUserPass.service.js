const { sequelize } = require("../../sequelize/index");
const bcrypt = require("bcrypt");
const { notFoundError, unauthorizedError } = require("../../apiResonse/error");
const Messages = require("../../enum/Messages");

const updateUserPassService = async (user) => {
  const { id, oldPassword, newPassword } = user;
  const userFound = await sequelize.models.User.findByPk(id);

  if (!userFound) throw new notFoundError(Messages.userNotFound);

  const isPasswordMatches = await bcrypt.compare(
    oldPassword,
    userFound.password
  );
  if (!isPasswordMatches) throw new unauthorizedError("password is incorrect");

  userFound.password = await bcrypt.hash(newPassword, 10);
  await userFound.save();
};
module.exports = updateUserPassService;
