const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:memory");
const User = sequelize.define("Task", {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  taskDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

(async () => {
  await sequelize.sync();
})();

module.exports = User;
