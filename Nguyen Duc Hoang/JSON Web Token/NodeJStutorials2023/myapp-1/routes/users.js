import express from 'express'
import { body, validationResult } from 'express-validator'
import { userController } from '../controllers/index.js'

const router = express.Router()

router.get('/:id', userController.getDetailUser)

router.post(
  '/login',
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  userController.login
)

router.post('/register', userController.register)

export default router
