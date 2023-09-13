import express from 'express'

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
