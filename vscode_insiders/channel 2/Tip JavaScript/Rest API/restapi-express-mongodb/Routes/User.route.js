const express = require('express')
const route = express.Router()

// Home Page
route.get('/', (req, res, next) => {
  res.json({
    status: 'success',
    elements: [
      {
        id: 1,
        name: 'Item 1',
        description: 'Description for Item 1'
      },
      {
        id: 2,
        name: 'Item 2',
        description: 'Description for Item 2'
      },
      {
        id: 3,
        name: 'Item 3',
        description: 'Description for Item 3'
      }
    ]
  })
})

// Get a list of all users
route.get('/users', (req, res, next) => {
  res.json({
    status: 'success',
    elements: [{}]
  })
})

module.exports = route
