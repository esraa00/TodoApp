const { models } = require("../../sequelize/index");
const getTask = async (req, res, next) => {
  const id = req.params.id;
  try {
    const taskFound = await models.Task.findOne({ where: { id } });

    if (!taskFound)
      return res
        .status(400)
        .send({ status: "failure", message: "task wasn't found" });

    res.status(200).send({ status: "success", taskFound });
  } catch (error) {
    next(error);
  }
};
module.exports = { getTask };
