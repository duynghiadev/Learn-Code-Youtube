import { useEffect, useState } from 'react'
import './App.css'
import Count from './Count'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

type People = {
  name: string
  age: number
  location?: string
}

type Employee = People & {
  jobTitle: string
  degree: string
}

interface IPeople {
  name: string
  age: number
  location?: string
}

interface IRelationship {
  wifeName: string
  childName: string
}

enum Degree {
  ASSOCIATES,
  BACHELORS,
  MASTERS,
  DOCTORATE,
  PROFESSIONAL
}

enum Degree_1 {
  ASSOCIATES = 'ASSOCIATES',
  BACHELORS = 'BACHELORS',
  MASTERS = 'MASTERS',
  DOCTORATE = 'DOCTORATE',
  PROFESSIONAL = 'PROFESSIONAL'
}

interface IEmployee extends IPeople, IRelationship {
  jobTitle: string
  degree: Degree
  level?: string | number | Degree
}

type ApiResponse = {
  data: { id: number; name: string }
  status: 'success' | 'failure'
}

type BookResponse = {
  data: { id: number; bookName: string }
  status: 'success' | 'failure'
}

type userResponseAndBookResponse<DataType> = {
  data: DataType
  status: 'success' | 'failure'
}

type userResponseAndBookResponse_2<DataType, MessageType> = {
  data: DataType
  status: 'success' | 'failure'
  message: MessageType
}

// Function 1: Process User Response
function processUserResponse<UserData, Message>(
  response: userResponseAndBookResponse_2<UserData, Message>
): void {
  if (response.status === 'success') {
    console.log('User Data Received:')
    console.log(response.data)
    console.log('Message:', response.message)
  } else {
    console.error('Error:', response.message)
  }
}

// Function 2: Process Book Response
function processBookResponse<BookData, Message>(
  response: userResponseAndBookResponse_2<BookData, Message>
): void {
  if (response.status === 'success') {
    console.log('Book Data Received:')
    console.log(response.data)
    console.log('Message:', response.message)
  } else {
    console.error('Error:', response.message)
  }
}

// Example User Response
const userResponse: userResponseAndBookResponse_2<{ name: string }, string> = {
  data: { name: 'John Doe' },
  status: 'success',
  message: 'User data retrieved successfully'
}

// Example Book Response
const bookResponse: userResponseAndBookResponse_2<{ title: string }, string> = {
  data: { title: 'The Great Gatsby' },
  status: 'failure',
  message: 'Book data retrieval failed'
}

// Call and Log Process User Response
console.log('Processing User Response:')
processUserResponse(userResponse)

// Call and Log Process Book Response
console.log('\nProcessing Book Response:')
processBookResponse(bookResponse)

function App() {
  const [count, setCount] = useState<number>(0)
  const [people, setPeople] = useState<People>()

  const userResponse: ApiResponse = {
    data: { id: 1, name: 'John' },
    status: 'success'
  }

  const bookResponse: BookResponse = {
    data: { id: 1, bookName: 'NGUOI PHAN XU' },
    status: 'success'
  }

  const userResponseAndBookResponse: userResponseAndBookResponse<{ id: number; name: string }> = {
    data: { id: 1, name: 'Cảm xúc là số 1 của thành công' },
    status: 'success'
  }

  const bookResponse_2: userResponseAndBookResponse<{ id: number; bookName: string }> = {
    data: { id: 2, bookName: 'Khi bạn đang mơ, thì người khác đang nổ lực' },
    status: 'success'
  }

  const employee: Employee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: 'Master'
  }

  const employee_1: IEmployee = {
    name: 'Employee',
    age: 48,
    jobTitle: 'Software Engineer',
    degree: Degree.MASTERS, // degree: 2
    childName: 'Ronaldo',
    wifeName: 'Anonymous',
    location: 'Da Nang City',
    level: Degree.PROFESSIONAL
  }

  const employee_2: typeof employee_1 = {
    age: 20,
    degree: Degree.MASTERS,
    jobTitle: 'Software Engineer',
    name: 'Duynghiadev',
    location: 'Sydney',
    childName: 'Messi',
    wifeName: 'Taylor Switch',
    level: Degree.PROFESSIONAL
  }

  function total(number1: number, number2: number): string {
    return String(number1 + number2)
  }

  console.log('People:', people)
  console.log('Employee:', employee)
  console.log('Employee_1:', employee_1)
  console.log('Degree:', Degree)
  console.log('Degree_1:', Degree_1)
  console.log('employee_2:', employee_2)
  console.log('userResponse:', userResponse)
  console.log('bookResponse:', bookResponse)
  console.log('userResponseAndBookResponse:', userResponseAndBookResponse)
  console.log('bookResponse_2:', bookResponse_2)

  useEffect(() => {
    setPeople({
      name: 'duynghiadev',
      age: 22,
      location: 'USA'
    })
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Count count={count} setCount={setCount} total={total} />
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
