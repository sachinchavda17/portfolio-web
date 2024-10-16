const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

router.use(bodyParser.json());

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if(!process.env.SMTP_EMAIL){
      res.status(403).send({ err: "Sorry its look like admin removed Thier email." });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `'Confirmation' ${process.env.SMTP_EMAIL} `,
      to: email,
      subject: "Portfolio Contact Details",
      html: `<h2> Your filled data </h2><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ err: "Error sending email" });
  }
});

module.exports = router;
