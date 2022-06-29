const Task = require("../../models/task");
const updateTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const {taskName, taskDescription} = req.body;
    /*no need to try found this task if u want to update unexesting one will catch an error */
    const taskFound = await Task.findOne({where: {id}});
    if (!taskFound)
      return res
        .status(400)
        .send({status: "failure", message: "task wasn't found"});

    const updatedTask = await Task.update(
      {taskName, taskDescription},
      {where: {id}}
    );

    res
      .status(200)
      .send({status: "success", message: "updated successfully"});
  } catch (error) {
    /*what will happen here???????*/
    next(error);
  }
};

module.exports = {updateTask};
