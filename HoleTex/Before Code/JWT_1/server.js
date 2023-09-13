import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

const books = [
  {
    id: 1,
    name: 'Chi Pheo',
    author: 'ABC'
  },
  {
    id: 2,
    name: 'Chien tranh va Hoa Binh',
    author: 'DEF'
  },
  {
    id: 3,
    name: 'Hello cac ban minh la ToiDiCodeDao',
    author: 'Toi Di Code Dao'
  }
]

// Create API login
app.post('/login', (req, res) => {
  // Authentication
  // Authorization
  // {username: 'Tesy'}
  const data = req.body
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
  res.json({ accessToken })
})

// Create API books to get all book in array
app.get('/books', (req, res) => {
  res.json({
    status: 'Success',
    data: books
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`)
})
