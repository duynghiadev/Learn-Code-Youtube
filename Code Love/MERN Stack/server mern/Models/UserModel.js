const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    role: String
});

// compiler
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;


