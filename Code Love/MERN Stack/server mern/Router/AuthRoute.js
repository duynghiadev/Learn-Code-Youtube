const express = require('express');
const router = express.Router();
const authController = require('../Controllers/AuthController');
const authMiddleware = require('../Middeware/AuthMiddleware');



router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', [authMiddleware.isAuthentication], authController.getUserLogin);
module.exports = router;
