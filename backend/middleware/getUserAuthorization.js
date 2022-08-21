const { sequelize } = require("../sequelize/index");
const getUserAuthorization = async (req, res, next) => {
  if (res.locals.userId) {
    const RoleId = await sequelize.models.User.findByPk(res.locals.userId);
    if (RoleId === 1) {
      res.locals.role = "Admin";
      next();
    } else {
      res.locals.role = "Customer";
      next();
    }
  } else {
    return res
      .status(401)
      .send({ status: "failure", response: "please sign in first" });
  }
};
module.exports = { getUserAuthorization };
