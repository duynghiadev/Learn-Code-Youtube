require('dotenv').config()
import jwt, { decode } from 'jsonwebtoken'

const nonSecurePaths = [
  '/logout',
  '/login',
  '/register',
  '/verify-services-jwt'
]

const createJWT = (payload) => {
  let key = process.env.JWT_SECRET
  let token = null
  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN
    })
  } catch (err) {
    console.log(err)
  }
  return token
}

const verifyToken = (token) => {
  let key = process.env.JWT_SECRET
  let decoded = null

  try {
    decoded = jwt.verify(token, key)
  } catch (err) {
    console.log(err)
  }
  return decoded
}

const extractToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    return req.headers.authorization.split(' ')[1]
  }
  return null
}

const checkUserJWT = (req, res, next) => {
  if (nonSecurePaths.includes(req.path)) return next()

  let cookies = req.cookies
  let tokenFromHeader = extractToken(req)

  if ((cookies && cookies.access_token) || tokenFromHeader) {
    let access_token =
      cookies && cookies.access_token ? cookies.access_token : tokenFromHeader
    let decoded = verifyToken(access_token)
    if (decoded) {
      decoded.access_token = access_token
      decoded.refresh_token = cookies.refresh_token
      req.user = decoded
      next()
    } else {
      return res.status(401).json({
        EC: -1,
        DT: '',
        EM: 'Not authenticated the user'
      })
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    })
  }
}

const checkUserPermission = (req, res, next) => {
  if (nonSecurePaths.includes(req.path) || req.path === '/account')
    return next()

  if (req.user) {
    let email = req.user.email
    let roles = req.user.groupWithRoles.Roles
    let currentUrl = req.path
    if (!roles || roles.length === 0) {
      return res.status(403).json({
        EC: -1,
        DT: '',
        EM: `you don't permission to access this resource...`
      })
    }

    let canAccess = roles.some(
      (item) => item.url === currentUrl || currentUrl.includes(item.url)
    )
    if (canAccess === true) {
      next()
    } else {
      return res.status(403).json({
        EC: -1,
        DT: '',
        EM: `you don't permission to access this resource...`
      })
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    })
  }
}

const checkServiceJWT = (req, res, next) => {
  let tokenFromHeader = extractToken(req)

  if (tokenFromHeader) {
    let access_token = tokenFromHeader
    let decoded = verifyToken(access_token)
    // todo: refresh_token
    if (decoded) {
      return res.status(200).json({
        EC: 0,
        DT: '',
        EM: 'Verify the user'
      })
    } else {
      return res.status(401).json({
        EC: -1,
        DT: '',
        EM: 'Not authenticated the user'
      })
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    })
  }
}

module.exports = {
  createJWT,
  verifyToken,
  checkUserJWT,
  checkUserPermission,
  checkServiceJWT
}
