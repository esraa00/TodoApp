const Messages = require("../../enum/Messages");
const { unprocessableEntityError } = require("../../apiResonse/error/index");
const { passwordRegex } = require("../../regex");
const { sequelize } = require("../../sequelize/index");
const bcrypt = require("bcrypt");

const createUserService = async (userToBeCreated, role) => {
  const { firstName, lastName, email, password, roleId } = userToBeCreated;

  if (!passwordRegex.test(password))
    throw new unprocessableEntityError(Messages.passwordConstraints);

  const hashedPassword = await bcrypt.hash(password, 10);

  const createdUser = await sequelize.models.User.build({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (role === "Admin") {
    createdUser.RoleId = roleId;
  }

  const user = await createdUser.save();
  return user.remove("password");
};

module.exports = createUserService;
