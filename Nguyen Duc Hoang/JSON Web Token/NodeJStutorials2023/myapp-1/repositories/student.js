import { Student } from '../models/index.js'
import Exception from '../exceptions/Exception.js'

const getAllStudents = async ({ page, size, searching }) => {
  console.log('get all students with paging')
}

// language: "english, vietnamese, japanese"
const insertStudent = async ({ name, email, languages, gender, phoneNumber, address }) => {
  // console.log('insert students')
  debugger
  try {
    const student = await Student.create({
      name,
      email,
      languages,
      gender,
      phoneNumber,
      address
    })
    return student
  } catch (exception) {
    if (!!exception.errors) {
      // error from validation
      throw new Exception('Input error', exception.errors)
    }
    debugger
  }
  debugger
}

export default { getAllStudents, insertStudent }
