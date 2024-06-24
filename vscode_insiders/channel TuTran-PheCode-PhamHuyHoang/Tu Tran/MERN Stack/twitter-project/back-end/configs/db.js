// connect database with mongoDB
import { connect } from 'mongoose'

export const connectDB = async () => {
  try {
    const conn = await connect(process.env.DB_URI)
    console.log('DB connection successfully')
  } catch (error) {
    console.log('error:', error)
    process.exit(1)
  }
}
