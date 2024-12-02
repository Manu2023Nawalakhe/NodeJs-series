const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-api")
  .then(() => {
    console.log("connection is successfully");
  })
  .catch((e) => {
    console.log(`connection is fail ${e}`);
  });
