const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: [true, "can't" + " be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  password: {
    type: String,
    required: [true, "can't" + " be blank"],
    trim: true,
  },
  date: { type: Date, default: Date.now() },
});

const User =  mongoose.model("User", UserSchema);

module.exports = User;
