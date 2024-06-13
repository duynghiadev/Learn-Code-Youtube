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

// API routes
app.get('/api/refreshToken', async (req, res) => {
  try {
    const accessToken = await signAccessToken()
    return res.status(200).json({
      status: 'success',
      elements: { accessToken }
    })
  } catch (error) {
    console.error('Error refreshing token:', error)
    return res.status(500).json({
      status: 'error',
      msg: 'Internal Server Error'
    })
  }
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
  try {
    const accessToken = await signAccessToken()
    return res.status(200).json({
      status: 'success',
      elements: { accessToken }
    })
  } catch (error) {
    console.error('Error logging in:', error)
    return res.status(500).json({
      status: 'error',
      msg: 'Internal Server Error'
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
