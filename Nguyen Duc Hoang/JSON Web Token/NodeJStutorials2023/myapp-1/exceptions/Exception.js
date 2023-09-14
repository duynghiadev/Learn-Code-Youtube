import { OutputType, print } from '../helpers/print.js'

export default class Exception extends Error {
  static WRONG_DB_USERNAME_PASSWORD = "Wrong database's username and password"
  static WRONG_CONNECTION_STRING = 'Wrong server name/connection string'
  static CANNOT_CONNECT_MONGODB = 'Cannot connect to Mongoose'
  static USER_EXIST = 'User already exists'

  constructor(message) {
    super(message) // call constructor of parent class (Error)
    print(message, OutputType.ERROR)
  }
}
