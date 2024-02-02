import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  // Access Authorization from request header
  const Authorization = req.header('authorization')

  if (!Authorization) {
    // Error: Unauthorized
  }

  // Get token
  const token = Authorization.replace('Bearer ', '')

  // Verify token
  const { userId } = jwt.verify(token, process.env.APP_SECRET)

  //   Assign request
  req.user = { userId }

  next()
}
