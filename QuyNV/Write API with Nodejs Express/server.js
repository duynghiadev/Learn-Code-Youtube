const express = require('express')
const app = express()
const userRoute = require('./routes/userRoute')

const port = 8080 // Khai báo cổng

// get, post, put, delete
app.use('/api/v1/users', userRoute)

// Lắng nghe cổng
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
