const express = require("express");
const app = express();

const sendMail = require("./controllers/sendMail.js");

let PORT = 5000;

app.get("/", (req, res) => {
  res.send("I am a server");
});
app.get("/sendemail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
