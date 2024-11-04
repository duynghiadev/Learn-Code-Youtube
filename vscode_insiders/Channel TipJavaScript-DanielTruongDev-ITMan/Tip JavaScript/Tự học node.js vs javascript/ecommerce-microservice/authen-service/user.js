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
  create_at: {
    type: String,
    default: Date.now(),
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
