import { body, validationResult } from 'express-validator'
import { studentRepository, userRepository } from '../repositories/index.js'
import { EventEmitter } from 'node:events'

const myEvent = new EventEmitter()
// listen
myEvent.on('event.register.user', (params) => {
  console.log(`They talk about: ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }
  const { email, password } = req.body
  // call repository
  await userRepository.login({ email, password })
  res.status(200).json({
    message: 'Login user successfully'
    // data: 'detail user here'
  })
}

const register = async (req, res) => {
  // destructuring
  const { name, email, password, phoneNumber, address } = req.body
  await userRepository.register({ name, email, password, phoneNumber, address })

  // Event Emitter
  myEvent.emit('event.register.user', { email, phoneNumber })
  res.status(201).json({
    message: 'Register user successfully'
  })
}

const getDetailUser = async (req, res) => {}

// many other function...
export default { login, register, getDetailUser }
