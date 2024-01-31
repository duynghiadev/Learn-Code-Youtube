const express = require('express')
const cors = require('cors')

const app = express()

// Cors
app.use(cors())

// Body parse
app.use(express.json())

app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      posts: [
        {
          content: 'Hello world!!!',
          date: '31/1/2024'
        }
      ]
    }
  })
})

const port = 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
