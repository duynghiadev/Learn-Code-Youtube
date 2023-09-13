import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET students ')
})

// get student by id
router.get('/:id', (req, res) => {
  res.send('GET detail student by id')
})

router.post('/insert', (req, res) => {
  res.send('POST insert students')
})

export default router
