import { print, OutputType } from '../helpers/print.js'

const login = async ({ email, password }) => {
  print('login user in user repository, duynghiadev', OutputType.INFORMATION)
}

const register = async ({ name, email, password, phoneNumber, address }) => {
  // validation already done
  print(
    'register user with: name: ' + name + ' email: ',
    email + ' password: ',
    +password,
    ' phoneNumber: ',
    +phoneNumber,
    ' address: ',
    +address,
    OutputType.INFORMATION
  )
}

export default { login, register }
