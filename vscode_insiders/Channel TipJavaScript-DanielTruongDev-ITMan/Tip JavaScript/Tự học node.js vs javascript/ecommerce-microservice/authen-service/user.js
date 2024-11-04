const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    default: "",
  },
  pass: {
    type: String,
    default: "",
  },
  accessToken: {
    type: String,
    default: "",
  },
  refreshToken: {
    type: String,
    default: "",
  },
  create_at: {
    type: Date,
    default: Date.now, // Set default to the current date
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
