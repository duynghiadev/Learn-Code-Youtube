const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const getListUser = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).send(users);
    } catch (error) {
       // logs error
    }
}

const postUser = (req, res) => {
    
    try {
        // 3. save data to user collection
        const { username, password, email, role } = req.body;
        userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: role,
        });
        return res.status(200).send('create user success');
    } catch (error) {
       // log errors
    }
    
}

const deleteUser = async (req, res) => {
    try {
        // 4. delete user
        const userId = req.params.userId;
        await userModel.findByIdAndRemove(userId);
        return res.status(200).send('delete user success');
    } catch (error) {
       // log errors
    }
}

module.exports = {
    getListUser: getListUser,
    postUser: postUser,
    deleteUser: deleteUser
}