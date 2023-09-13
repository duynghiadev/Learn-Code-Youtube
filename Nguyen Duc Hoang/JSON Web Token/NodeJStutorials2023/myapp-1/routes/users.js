import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET users ')
})

router.post('/login', (req, res) => {
  // email, password
  const { email, password } = req.body
  debugger
  res.send('POST login users')
})

router.post('/register', (req, res) => {
  res.send('PORT register users')
})

export default router
