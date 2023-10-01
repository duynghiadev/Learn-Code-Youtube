import db from '../models/index'
import bcrypt from 'bcryptjs'
import { Op } from 'sequelize'

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt)
  return hashPassword
}

const checkEmailExist = async (userEmail) => {
  let user = await db.User.findOne({
    where: { email: userEmail }
  })

  if (user) {
    return true
  }
  return false
}

const checkPhoneExist = async (userPhone) => {
  let user = await db.User.findOne({
    where: { phone: userPhone }
  })

  if (user) {
    return true
  }
  return false
}

const registerNewUser = async (rawUser) => {
  try {
    // check email are exist
    let isEmailExist = await checkEmailExist(rawUser.email)
    if (isEmailExist === true) {
      return {
        EM: 'The email is already exist',
        EC: 1
      }
    }

    let isPhoneExist = await checkPhoneExist(rawUser.phone)
    if (isPhoneExist === true) {
      return {
        EM: 'The phone number is already exist',
        EC: 1
      }
    }

    // hash user password
    let hashPassword = hashUserPassword(rawUser.password)

    // create new user
    await db.User.create({
      email: rawUser.email,
      username: rawUser.username,
      password: hashPassword,
      phone: rawUser.phone
    })

    return {
      EM: 'A user is created successfully!',
      EC: 0
    }
  } catch (e) {
    console.log(e)
    return {
      EM: 'Something wrong in service...',
      EC: -2
    }
  }
}

const checkPassword = (inputPassword, hashPassword) => {
  return bcrypt.compareSync(inputPassword, hashPassword) // true or false
}

const handleUserLogin = async (rawData) => {
  try {
    let user = await db.User.findOne({
      where: {
        [Op.or]: [{ email: rawData.valueLogin }, { phone: rawData.valueLogin }]
      }
    })

    if (user) {
      console.log('>>> Found user with email/phone')
      let isCorrectPassword = checkPassword(rawData.password, user.password)
      if (isCorrectPassword === true) {
        return {
          EM: 'ok!',
          EC: 0,
          DT: ''
        }
      }
    }
    console.log('>>> Input user with email/phone:', rawData.valueLogin, 'password:', rawData.password)
    return {
      EM: 'Your email/phone number or password is incorrect!',
      EC: 1,
      DT: ''
    }
  } catch (error) {
    console.log(error)
    return {
      EM: 'Something wrongs in service...',
      EC: -2,
      DT: ''
    }
  }
}

module.exports = {
  registerNewUser,
  handleUserLogin
}
