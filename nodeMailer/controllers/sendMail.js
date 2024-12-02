const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  //connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "annetta95@ethereal.email",
      pass: "fWd5vzmhqpzA7vj2RZ",
    },
  });

  const info = await transporter.sendMail({
    from: '"Manisha Nawalakhe" <Manisha@gmail.email>', // sender address
    to: "manishanawalakhe@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  console.log("Message sent: %s",info.messageId);
  res.json(info)
  
};
module.exports = sendMail;
