import Exception from '../exceptions/Exception.js'
import { print, OutputType } from '../helpers/print.js'
import User from '../models/User.js'

const login = async ({ email, password }) => {
  print('login user in user repository, duynghiadev', OutputType.INFORMATION)
}

const register = async ({ name, email, password, phoneNumber, address }) => {
  // validation already done
  try {
    let existingUser = await User.findOne({ email }).exec()
    if (!!existingUser) {
      throw new Exception(Exception.USER_EXIST)
    }
    // encrypt password
  } catch (exception) {}
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
