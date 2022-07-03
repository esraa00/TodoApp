const applyAssociation = (sequelize) => {
  const { User, Role, Task } = sequelize.models;

  Role.hasMany(User);
  User.belongsTo(Role);
  User.hasMany(Task);
  Task.belongsTo(User);
};

module.exports = { applyAssociation };
