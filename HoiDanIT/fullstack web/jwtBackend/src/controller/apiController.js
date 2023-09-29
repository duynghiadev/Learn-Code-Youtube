const testAPI = (req, res) => {
  return res.status(200).json({
    message: 'ok',
    data: 'test api'
  })
}

const handeRegister = (req, res) => {
  console.log('me', req.body)
}

module.exports = {
  testAPI,
  handeRegister
}
