import { Student } from '../models/index.js'
import Exception from '../exceptions/Exception.js'
import { faker } from '@faker-js/faker'
import { print } from '../helpers/print.js'

const getAllStudents = async ({ page, size, searchString }) => {
  // aggregate data for all students
  page = parseInt(page)
  size = parseInt(size)
  // searchString? name,email,address contains searchString

  let filteredStudents = await Student.aggregate([
    {
      $match: {
        $or: [
          {
            name: { $regex: `.*${searchString}.*`, $options: 'i' } // ignore case
          },
          {
            name: { $regex: `.*${searchString}.*`, $options: 'i' } // ignore case
          },
          {
            name: { $regex: `.*${searchString}.*`, $options: 'i' } // ignore case
          }
        ]
      }
    },
    {
      $skip: (page - 1) * size
    },
    {
      $limit: size
    }
  ])
  return filteredStudents
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

async function generateFakeStudents() {
  let fakeStudents = []
  for (let i = 0; i < 1000; i++) {
    let fakeStudent = {
      name: `${faker.name.fullName()}-faker`,
      email: faker.internet.email(),
      languages: [
        faker.helpers.arrayElement(['English', 'Vietnamese', 'French']),
        faker.helpers.arrayElement(['Korean', 'Japanese', 'Chinese'])
      ],
      gender: faker.helpers.arrayElement(['Male', 'Female']),
      phoneNumber: faker.phone.number(),
      address: faker.address.streetAddress()
    }
    fakeStudents.push(fakeStudent)
  }
  debugger
  await Student.insertMany(fakeStudents)
}

export default { getAllStudents, insertStudent, generateFakeStudents }
