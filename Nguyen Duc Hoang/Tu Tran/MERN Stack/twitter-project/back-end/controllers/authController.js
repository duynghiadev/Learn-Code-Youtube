import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (req, res, next) => {
  try {
    // req.body - name, email, password
    const user = await User.create(req.body)
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)

    res.status(200).json({
      status: 'success',
      data: { token, userName: user.name }
    })
  } catch (error) {
    res.json(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      // Error: Email is not correct
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET)
      res.status(200).json({
        status: 'success',
        data: { token, userName: user.name }
      })
    } else {
      // Error: Password is not correct
    }
  } catch (error) {
    res.json(error)
  }
}
