const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 8000;
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

const mongoUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster1.zota6hd.mongodb.net/${process.env.MONGO_CLUSTER}`;

try {
  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Mongo!"))
    .catch((err) => console.log(`Error while connecting with mongo ${err}`));
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
app.use("/auth", authRoute);
app.use("/project", projectRoute);
app.use("/contact", nodemailerRoute);
// app.use("/skills", skillRoute);

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
