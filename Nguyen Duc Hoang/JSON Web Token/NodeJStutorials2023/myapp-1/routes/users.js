import express from 'express'
import { body, validationResult } from 'express-validator'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET users ')
})

router.post(
  '/login',
  body('email').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    res.send('POST login users')
  }
)

router.post('/register', (req, res) => {
  res.send('PORT register users')
})

export default router
