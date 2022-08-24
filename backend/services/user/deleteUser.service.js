const {
  unauthorizedError,
  notFoundError,
  internalServerError,
} = require("../../apiResonse/error");
const { sequelize } = require("../../sequelize/index");
const Messages = require("../../enum/Messages");

const deleteUserService = async (userInformation, role) => {
  const { currentUserId, userIdToBeDeleted } = userInformation;
  if (role !== "Admin") {
    if (currentUserId !== userIdToBeDeleted) {
      throw new unauthorizedError("you must provide two identical id's");
    }
  }
  const userToBeDeleted = await sequelize.models.User.findByPk(
    userIdToBeDeleted
  );
  if (!userToBeDeleted) throw new notFoundError(Messages.userNotFound);

  const deletedUser = await sequelize.models.User.destroy({
    where: { id: userIdToBeDeleted },
  });

  if (deletedUser !== 1)
    throw new internalServerError(Messages.userCouldntBeDeleted);
};

module.exports = deleteUserService;
