const mongoose = require("mongoose");
module.exports = function (app) {
  mongoose
    .connect(
      "mongodb+srv://diablo2018:diablo2018@trifsergiu.4yfx7.mongodb.net/zeroshop",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    )
    .then((connrction) => console.log("Application is connected to db"))
    .catch((err) => console.log(err));
  mongoose.Promise = global.Promise;
  process.on("SIGINT", cleanup);
  process.on("SIGTERM", cleanup);
  process.on("SIGHUP", cleanup);
  if (app) {
    app.set("mongoose", mongoose);
  }
};
function cleanup() {
  mongoose.connection.close(function () {
    process.exit(0);
  });
}
