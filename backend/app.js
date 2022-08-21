const { app, initializeDatabase } = require("./server");

const init = async () => {
  try {
    await initializeDatabase();
    app.listen(4000, () => {
      console.log("server is listening on port 4000");
    });
  } catch (error) {
    console.log(error);
  }
};
init();
