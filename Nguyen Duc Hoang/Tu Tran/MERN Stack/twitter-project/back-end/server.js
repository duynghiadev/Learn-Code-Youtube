const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      posts: []
    }
  })
})

const port = 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
