import userApiService from '../service/userApiService'

const readFunc = async (req, res) => {
  try {
    let data = await userApiService.getAllUser()
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const createFunc = (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const updateFunc = (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

const deleteFunc = (req, res) => {
  try {
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // Error Message
      EC: '-1', // Error Code
      DT: '' // Data
    })
  }
}

module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc
}
