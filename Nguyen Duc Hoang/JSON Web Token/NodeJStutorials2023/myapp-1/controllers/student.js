import { body, validationResult } from 'express-validator'

async function getAllStudents(req, res) {
  res.status(200).json({
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
  // res.status(500).json({
  //   message: 'Cannot get students'
  // })
}

async function getStudentById(req, res) {}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default { getAllStudents, getStudentById, updateStudent, insertStudent }
