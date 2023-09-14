import { body, validationResult } from 'express-validator'
import HttpStatusCode from '../exceptions/HttpStatusCode.js'

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

async function insertStudent(req, res) {}

export default { getAllStudents, getStudentById, updateStudent, insertStudent }
