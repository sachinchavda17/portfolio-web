const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const projectRoute = require("./routes/project");
const authRoute = require("./routes/auth");
const nodemailerRoute = require("./routes/nodemailer");
// const skillRoute = require("./routes/skills")
const bodyParser = require("body-parser");
const session = require("express-session");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
require("dotenv").config();

try {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongo!"))
    .catch((err) => console.log(`Error while connecting with Mongo ${err}`));
} catch (err) {
  console.log(`Error while connecting with mongo ${err}`);
}

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "hey",
  })
);
app.get("/", (req, res) => {
  res.send("Server is Running....")
})
app.use("/auth", authRoute);
app.use("/project", projectRoute);
app.use("/contact", nodemailerRoute);
// app.use("/skills", skillRoute);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
