const deleteUserService = require("../../services/user/deleteUser.service");
const deleteUser = async (req, res, next) => {
  try {
    await deleteUserService(req.params, res.locals.id);
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteUser };
