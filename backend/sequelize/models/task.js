const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Task", {
    taskName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: "taskName",
        msg: "task name already exists",
      },
      validate: {
        notEmpty: {
          args: true,
          msg: "task name can't be empty",
        },
      },
    },
    taskDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "task description can't be empty",
        },
      },
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
