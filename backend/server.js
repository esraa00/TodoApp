const express = require("express");
const app = express();
const sequelize = require("./sequelize/index");

const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");
const catchErrorsMiddleware = require("./middleware/catchErrors");

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/task", taskRoutes);
app.use("/api/v1/user", userRoutes);
app.use(catchErrorsMiddleware);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
