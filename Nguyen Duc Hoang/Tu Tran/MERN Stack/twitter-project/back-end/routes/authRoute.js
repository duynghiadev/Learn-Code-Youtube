import express from 'express'
import { login, register } from '../controllers/authController.js'

const Router = express.Router()

Router.route('/register').post(register)
Router.route('/login').post(login)

export default Router
