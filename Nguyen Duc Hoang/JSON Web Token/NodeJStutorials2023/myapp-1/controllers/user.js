import { body, validationResult } from 'express-validator'

const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const { email, password } = req.body
  res.send('POST login users')
}

const register = async (req, res) => {
  res.send('PORT register users')
}

const getDetailUser = async (req, res) => {}

// many other function...
export default { login, register, getDetailUser }
