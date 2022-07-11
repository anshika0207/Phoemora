const { default: mongoose } = require("mongoose");

const database = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/amApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB CONNECTED");
    })
    .catch((err) => {
      console.log("OH NO!! MONGO CONNECTION ERROR!!!!");
      console.log(err);
    });
};

module.exports = database;
