import mongoose from 'mongoose'
import { OutputType, print } from '../helpers/print.js'

mongoose.set('strictQuery', true)

async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI)
    debugger
    print('connect mongoose successfully', OutputType.SUCCESS)
    return connection
  } catch (error) {
    print('Connect mongoose error', OutputType.ERROR)
    const { code } = error
    debugger
    if (error.code === 8000) {
      throw new Error("Wrong database's username and password")
    } else if (code == 'ENOTFOUND') {
      throw new Error('Wrong server name/connection string')
    }
    throw new Error('Cannot connect to Mongoose')
  }
}

export default connect
