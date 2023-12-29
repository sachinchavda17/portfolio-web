const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ err: "User already exists" });
  }
  const newUserData = {
    username,
    email,
    password,
  };
  await User.create(newUserData);
  return res.status(200).json({ message: "Signup successful" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(403).json({ err: "Invalid Credentials" });
    }

    // Compare passwords directly (not recommended)
    if (password !== user.password) {
      return res.status(403).json({ err: "Invalid Credentials" });
    }
    req.session.UerId = user._id;
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;
