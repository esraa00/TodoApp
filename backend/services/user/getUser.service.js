const { notFoundError } = require("../../apiResonse/error");
const Messages = require("../../enum/Messages");
const { sequelize } = require("../../sequelize/index");
const getUserService = async (id) => {
  const userFound = await sequelize.models.User.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  if (!userFound) throw new notFoundError(Messages.userNotFound);
};
module.exports = getUserService;
