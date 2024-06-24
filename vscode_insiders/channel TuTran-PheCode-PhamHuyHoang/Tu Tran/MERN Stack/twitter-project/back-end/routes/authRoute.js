import express from 'express'
import { getCurrentUser, login, register } from '../controllers/authController.js'
import { checkCurrentUser } from '../middlewares/checkCurrentUser.js'

const Router = express.Router()

Router.route('/register').post(register)
Router.route('/login').post(login)
Router.route('/').post(checkCurrentUser, getCurrentUser) // api/v1/auth/

export default Router
