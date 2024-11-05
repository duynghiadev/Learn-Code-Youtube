import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 5500

app.use(express.json())

let refreshTokens = []

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.token
  if (!refreshToken) res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) res.sendStatus(403)

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
    console.log(err, data)
    if (err) res.sendStatus(403)
    const accessToken = jwt.sign(
      {
        username: data.username
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30s'
      }
    )
    res.json({ accessToken })
  })
})

// Create API login
app.post('/login', (req, res) => {
  // Authentication
  // Authorization
  // {username: 'Tesy'}
  const data = req.body
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '30s'
  })
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET)
  refreshTokens.push(refreshToken)

  res.json({ accessToken, refreshToken })
})

// API logout
app.post('/logout', (req, res) => {
  const refreshToken = req.body.token
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken)
  res.sendStatus(200)
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})
