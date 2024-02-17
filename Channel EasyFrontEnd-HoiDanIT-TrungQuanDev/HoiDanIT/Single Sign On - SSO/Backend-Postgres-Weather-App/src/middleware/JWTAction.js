require('dotenv').config()

const nonSecurePaths = ['/']

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

  let tokenFromHeader = extractToken(req)
  console.log('token From Header:', tokenFromHeader)

  if (tokenFromHeader) {
    let access_token = tokenFromHeader
    next()
    // call sso to verify token

    // let decoded = verifyToken(access_token)
    // if (decoded) {
    //   decoded.access_token = access_token
    //   decoded.refresh_token = cookies.refresh_token
    //   req.user = decoded
    //   next()
    // } else {
    //   return res.status(401).json({
    //     EC: -1,
    //     DT: '',
    //     EM: 'Not authenticated the user'
    //   })
    // }
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

module.exports = {
  checkUserJWT,
  checkUserPermission
}
