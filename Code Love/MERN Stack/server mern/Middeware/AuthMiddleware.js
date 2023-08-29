const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');



// check authentication
const isAuthentication = (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];
        const accessToken = bearerHeader.split(' ')[1];
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        // set userId to req object
        req.userId = decodeJwt._id;
        next();
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError) {
            return res.status(401).send('Token Expired');
        }
        return res.status(401).send('Authentication not valid');
    }
     
}

// check role is admin
const isAdmin = async (req, res, next) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId);
        // role is admin
        if(user.role === 'admin') {
            next();
        }
    } catch (error) {
        return res.status(401).send('Authentication not valid');
    }
    
}


module.exports = {
    isAuthentication: isAuthentication,
    isAdmin: isAdmin
}