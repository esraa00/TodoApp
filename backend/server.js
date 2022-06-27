const express = require("express");
const app = express();

const taskRoutes = require("./routes/task");
const catchErrorsMiddleware = require("./middleware/catchErrors");

const connectToDatabase = require("./database/connection");
connectToDatabase();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/task", taskRoutes);
app.use(catchErrorsMiddleware);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
