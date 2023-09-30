import loginRegisterService from '../service/loginRegisterService'

const testAPI = (req, res) => {
  return res.status(200).json({
    message: 'ok',
    data: 'test api'
  })
}

const handeRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: 'Missing required parameters', // Error Message
        EC: '1', // Error Code
        DT: '' // Date
      })
    }

    if (req.body.password && req.body.password.length < 4) {
      return res.status(200).json({
        EM: 'Your password must have more than 3 letters', // Error Message
        EC: '1', //Error Code
        DT: '' //Date
      })
    }

    // Service: create user
    let data = await loginRegisterService.registerNewUser(req.body)

    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: '' // Date
    })
  } catch (e) {
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Date
    })
  }
}

module.exports = {
  testAPI,
  handeRegister
}
