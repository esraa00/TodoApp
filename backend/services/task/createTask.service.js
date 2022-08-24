const { sequelize } = require("../../sequelize/index");
const createTaskService = (taskInformation) => { 
    const { taskName, taskDescription, userId } = taskInformation;
    const createdTask = await sequelize.models.Task.create({
        taskName,
        taskDescription,
        userId,
      });
    return createdTask;
}
module.exports = createTaskService;