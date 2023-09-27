import bcrypt from 'bcryptjs'
import mysql from 'mysql2/promise'
import bluebird from 'bluebird'
import db from '../models/index'

const salt = bcrypt.genSaltSync(10)

const hashUserPassword = (userPassword) => {
  let hashPassword = bcrypt.hashSync(userPassword, salt)
  return hashPassword
}

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password)

  try {
    await db.User.create({
      username: username,
      email: email,
      password: hashPass
    })
  } catch (error) {
    console.log('>>> check error:', error)
  }
}

const getUserList = async () => {
  // create the connection, spectify bluebird as Promise
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  })

  try {
    const [rows, fields] = await connection.execute('SELECT * FROM user')
    return rows
  } catch (error) {
    console.log('>>> check error:', error)
  }
}

const deleteUser = async (id) => {
  // create the connection, spectify bluebird as Promise
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  })

  try {
    const [rows, fields] = await connection.execute('DELETE FROM user WHERE id=?', [id])
    return rows
  } catch (error) {
    console.log('>>> check error:', error)
  }
}

const getUserById = async (id) => {
  // create the connection, spectify bluebird as Promise
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  })

  try {
    const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id=?', [id])
    console.log('>>> check rows:', rows)
    return rows
  } catch (error) {
    console.log('>>> check error:', error)
  }
}

const updateUserInfo = async (email, username, id) => {
  // create the connection, spectify bluebird as Promise
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt',
    Promise: bluebird
  })

  try {
    const [rows, fields] = await connection.execute('UPDATE user SET email=?, username=? WHERE id=?', [
      email,
      username,
      id
    ])
    return rows
  } catch (error) {
    console.log('>>> check error:', error)
  }
}

module.exports = {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfo
}
