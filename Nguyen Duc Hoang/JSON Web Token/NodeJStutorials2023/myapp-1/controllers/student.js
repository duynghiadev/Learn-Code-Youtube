import { body, validationResult } from 'express-validator'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'
import { studentRepository } from '../repositories/index.js'

async function getAllStudents(req, res) {
  res.status(HttpStatusCode.OK).json({
    message: 'GET students successfully',
    data: [
      {
        name: 'Nguyen Van A',
        email: 'nguyenvana@gmaill.com',
        age: 18
      },
      {
        name: 'Anna',
        email: 'nguyenvanb@gmaill.com',
        age: 20
      },
      {
        name: 'David',
        email: 'nguyenvanc@gmaill.com',
        age: 40
      }
    ]
  })
  // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
  //   message: 'Cannot get students'
  // })
}

async function getStudentById(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {
  try {
    const student = await studentRepository.insertStudent(req.body)
    res.status(HttpStatusCode.INSERT_OK).json({
      message: 'Insert student successfully',
      data: student
    })
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: 'Cannot insert student:' + exception,
      validationErrors: exception.validationErrors
    })
  }
}

async function generateFakeStudents(req, res) {
  await studentRepository.generateFakeStudents(req.body)
  res.status(HttpStatusCode.INSERT_OK).json({
    message: 'Insert fake students successfully'
  })
}

export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudent,
  generateFakeStudents // should be 'private'
}
