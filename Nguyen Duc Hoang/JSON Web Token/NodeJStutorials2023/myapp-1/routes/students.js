import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('GET students ')
})

// get student by id
router.get('/:id', (req, res) => {
  // debugger
  res.send('GET detail student by id: ' + req?.params?.id ?? '')
})

// put or patch
router.patch('/', (req, res) => {
  res.send('PATCH (create new object if not exists) insert student')
})

router.post('/', (req, res) => {
  res.send('POST insert students')
})

export default router
