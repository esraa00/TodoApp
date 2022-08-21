const { DataTypes } = require("sequelize");
const applyAssociation = (sequelize) => {
  const { User, Role, Task } = sequelize.models;

  User.belongsTo(Role);
  Role.hasMany(User, {
    foreignKey: {
      name: "RoleId",
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: "2",
    },
  });

  User.hasMany(Task);
  Task.belongsTo(User);
};

module.exports = { applyAssociation };
