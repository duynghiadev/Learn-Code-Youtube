const express = require('express')
const { verifyToken, signAccessToken, signRefreshToken } = require('./init_jwt')
require('dotenv').config()
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname)))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

// START API
app.get('/api/refreshToken', async (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: {
      accessToken: await signAccessToken()
    }
  })
})

app.get('/api/users', verifyToken, (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: [
      {
        name: 'duynghiadev'
      },
      {
        name: 'tips javascript'
      }
    ]
  })
})

app.get('/api/login', async (req, res) => {
  return res.status(200).json({
    status: 'success',
    elements: {
      accessToken: await signAccessToken()
    }
  })
})
// END API

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
