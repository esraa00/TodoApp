const { forbiddenError } = require("../../apiResonse/error");
const Messages = require("../../enum/Messages");
const { sequelize } = require("../../sequelize/index");

const getAllUsersService = async (role) => {
  if (role === "Admin") {
    return await sequelize.models.User.findAll({
      attributes: { exclude: ["password"] },
    });
  }
  throw new forbiddenError(Messages.forbiddenError);
};
module.exports = getAllUsersService;
