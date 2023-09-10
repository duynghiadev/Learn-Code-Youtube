import express, { Router } from 'express'
import * as jwt from 'jsonwebtoken'

// Demo data
const demo = {
  privateKey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkR1eSBOZ2hpYSIsImlhdCI6MTUxNjIzOTAyMn0.xkJoE7iGBBUH0UbVoSiVXYngV05H9txBKwnZd3vKr4s',
  users: [
    {
      username: 'user0',
      password: 'pass0',
      actions: [
        { name: 'Like', image: './assets/like.png' },
        { name: 'Comment', image: './assets/comment.png' }
      ]
    },
    {
      username: 'user1',
      password: 'pass1',
      actions: [
        { name: 'Share', image: './assets/share.png' },
        { name: 'Subscribe', image: './assets/subscribe.png' }
      ]
    }
  ]
}

// Create app
const app = express()

const cors = require('cors')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// Static frontend
app.use(express.static('public'))

// API
const api = Router()

api.use(express.json())

api.use((req, res, next) => {
  if (!req.body) return res.status(400).send({ error: 'Invalid Request' })
  else return next()
})

api.post('/login', (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ error: 'Invalid Request' })
  }
  const user = demo.users.find((u) => u.username === req.body.username && u.password === req.body.password)
  if (!user) {
    return res.status(401).send({ error: 'Invalid username or password' })
  }
  return res.send({
    token: jwt.sign(
      {
        username: user.username
      },
      demo.privateKey
    )
  })
})

api.post('/actions', (req, res) => {
  const sendInvalid = () => res.status(401).send({ error: 'Invalid Token' })
  if (!req.body.token) {
    return sendInvalid()
  }

  let token: any
  try {
    token = jwt.verify(req.body.token, demo.privateKey)
  } catch (e) {
    return sendInvalid()
  }

  const username = token.username

  const user = demo.users.find((u) => u.username === username)
  if (!user) {
    return sendInvalid()
  }

  return res.send({ actions: user.actions })
})
app.use('/api', api)

// Start the server
const port = 3000
app.listen(port, () => {
  console.log('Server started on port:', port)
})
