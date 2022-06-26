const Task = require("../models/task");

const createTask = async (req, res) => {
  const { taskName, taskDescription, isCompleted } = req.body;

  if (
    !taskName ||
    !taskDescription ||
    taskName.match(/^ *$/) !== null ||
    taskDescription.match(/^ *$/) !== null
  )
    return res.status(400).send({
      status: "failure",
      message: "please provide task name and description",
    });

  const isTaskNameRepeated = await Task.findOne({ taskName });
  if (isTaskNameRepeated)
    return res
      .status(400)
      .send({ status: "failure", message: "task name is repeated" });

  const createdTask = await Task.create({
    taskName,
    taskDescription,
    isCompleted,
  });

  if (!createdTask)
    return res.status(500).send({
      status: "failure",
      message: "task didn't recorderd successfully , please try again later",
    });

  res.status(200).send({ status: "success", message: "successfully added" });
};

const getTask = async (req, res) => {
  const id = req.params.id;

  const taskFound = await Task.findOne({ where: { id } });

  if (!taskFound)
    return res
      .status(400)
      .send({ status: "failure", message: "task wasn't found" });

  res.status(200).send({ status: "success", taskFound });
};

const updateTask = async (req, res) => {
  const id = req.params.id;
  const { taskName, taskDescription } = req.body;

  if (
    taskName === null ||
    taskDescription === null ||
    taskName.match(/^ *$/) !== null ||
    taskDescription.match(/^ *$/) !== null
  )
    return res.status(400).send({
      status: "failure",
      message: "task name or description cannot be empty",
    });

  const taskFound = await Task.findOne({ where: { id } });
  if (!taskFound)
    return res
      .status(400)
      .send({ status: "failure", message: "task wasn't found" });

  const updatedTask = await Task.update(
    { taskName, taskDescription },
    { where: { id } }
  );
  if (!updatedTask)
    return res.status(500).send({
      status: "failure",
      message: "couldn't update task , please try again later",
    });
  res.status(200).send({ status: "success", message: "updated successfully" });
};

const deleteTask = async (req, res) => {
  const id = req.params.id;

  const taskFound = await Task.findOne({ where: { id } });

  if (!taskFound)
    return res
      .status(400)
      .send({ status: "failure", message: "task wasn't found" });

  const task = Task.destroy({ where: { id } });

  if (task < 0)
    return res.status(500).send({
      status: "failuer",
      message: "couldn't delete task , please try again later",
    });

  res.status(200).send({ status: "success", message: "deleted successfully" });
};

module.exports = { createTask, getTask, updateTask, deleteTask };
