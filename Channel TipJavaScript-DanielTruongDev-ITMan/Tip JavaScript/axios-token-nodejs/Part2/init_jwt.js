const JWT = require('jsonwebtoken')
require('dotenv').config()

const signAccessToken = async () => {
  const payload = {
    userId: 1,
    name: 'Tips JavaScript'
  }

  const token = await JWT.sign(payload, process.env.KEY_ACCESSTOKEN, {
    expiresIn: '1m'
  })
  return token
}

const signRefreshToken = async () => {
  const payload = {
    userId: 1,
    name: 'Tips JavaScript'
  }

  const token = await JWT.sign(payload, process.env.KEY_REFRESHTOKEN, {
    expiresIn: '10m'
  })
  return token
}

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-token']
    if (!token) throw new Error('Token not provided')

    console.log(`Token received: ${token}`)
    const payload = await JWT.verify(token, process.env.KEY_ACCESSTOKEN)
    req.user = payload
    next()
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ code: 401, msg: error.message })
    }
    return res.status(500).json({ code: 500, msg: error.message })
  }
}

module.exports = {
  verifyToken,
  signAccessToken,
  signRefreshToken
}
