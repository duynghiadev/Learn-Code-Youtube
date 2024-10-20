import jwt from 'jsonwebtoken'

export const checkCurrentUser = (req, res, next) => {
  // Access Authorization from header
  const Authorization = req.header('authorization')

  if (!Authorization) {
    req.user = null
    next()
  } else {
    // Get token from Authorization
    const token = Authorization.replace('Bearer ', '')

    // Verify token
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET)
      req.user = { userId }
      next()
    } catch (err) {
      req.user = null
      next()
    }
  }
}
