const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:memory");
const User = sequelize.define("Task", {
  taskName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "task name must be unique",
    },
    validate: {
      notEmpty: {
        args: true,
        msg: "task name cannot be empty",
      },
    },
  },
  taskDescription: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "task description cannot be empty",
      },
    },
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
