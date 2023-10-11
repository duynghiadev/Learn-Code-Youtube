import loginRegisterService from '../service/loginRegisterService'

const testAPI = (req, res) => {
  return res.status(200).json({
    message: 'ok',
    data: 'test api'
  })
}

const handleRegister = async (req, res) => {
  try {
    if (!req.body.email || !req.body.phone || !req.body.password) {
      return res.status(200).json({
        EM: 'Missing required parameters', // Error Message
        EC: '1', // Error Code
        DT: '' // Data
      })
    }

    if (req.body.password && req.body.password.length < 4) {
      return res.status(200).json({
        EM: 'Your password must have more than 3 letters', // Error Message
        EC: '1', //Error Code
        DT: '' //Data
      })
    }

    // Service: create user
    let data = await loginRegisterService.registerNewUser(req.body)

    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: '' // Data
    })
  } catch (e) {
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const handleLogin = async (req, res) => {
  try {
    let data = await loginRegisterService.handleUserLogin(req.body)
    // set cookie
    if (data && data.DT && data.DT.access_token) {
      res.cookie('jwt', data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 })
    }

    return res.status(200).json({
      EM: data.EM, // Error Message
      EC: data.EC, // Error Code
      DT: data.DT // Data
    })
  } catch (error) {
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const handleLogout = (req, res) => {
  try {
    res.clearCookie('jwt')
    return res.status(200).json({
      EM: 'clear cookies done !',
      EC: 0,
      DT: ''
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'Error from server',
      EC: '-1',
      DT: ''
    })
  }
}

module.exports = {
  testAPI,
  handleRegister,
  handleLogin,
  handleLogout
}
