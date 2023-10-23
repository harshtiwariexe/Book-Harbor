const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, Required: [true, "A user must have name"] },
  email: { type: String, Required: [true, "A user must have email"] },
  password: { type: String, Required: [true, "A user must have password"] },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
