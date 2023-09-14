import { body, validationResult } from 'express-validator'

const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }
  const { email, password } = req.body
  res.status(200).json({
    message: 'Login user successfully'
    // data: 'detail user here'
  })
}

const register = async (req, res) => {
  res.status(201).json({
    message: 'Register user successfully'
  })
}

const getDetailUser = async (req, res) => {}

// many other function...
export default { login, register, getDetailUser }
