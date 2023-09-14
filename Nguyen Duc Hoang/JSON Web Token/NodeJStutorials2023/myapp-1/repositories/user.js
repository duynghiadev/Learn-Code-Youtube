import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const login = async ({ email, password }) => {
  print('login user in user repository, duynghiadev', OutputType.INFORMATION)
}

const register = async ({ name, email, password, phoneNumber, address }) => {
  // validation already done
  debugger
  const existingUser = await User.findOne({ email }).exec()
  if (!!existingUser) {
    throw new Exception(Exception.USER_EXIST)
  }
  // encrypt password, use bcrypt
  // used for login purpose
  // const isMatched = await bcrypt.compare(password, existingUser.password)
  // if(isMatched){}
  const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
  // insert to db
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phoneNumber,
    address
  })
  return { ...newUser._doc, password: 'Not show' }
  // print(
  //   'register user with: name: ' + name + ' email: ',
  //   email + ' password: ',
  //   +password,
  //   ' phoneNumber: ',
  //   +phoneNumber,
  //   ' address: ',
  //   +address,
  //   OutputType.INFORMATION
  // )
}

export default { login, register }
