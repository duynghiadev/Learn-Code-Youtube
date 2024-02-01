import User from '../models/User.js'

export const register = async (req, res, next) => {
  try {
    // req.body - name, email, password
    const user = await User.create(req.body)
    res.status(200).json({
      status: 'success',
      data: { user }
    })
  } catch (error) {
    res.json(error)
  }
}

export const login = (req, res, next) => {
  res.json('User login')
}
