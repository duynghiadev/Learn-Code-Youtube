import userApiService from '../service/userApiService'

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page
      let limit = req.query.limit
      let data = await userApiService.getUserWithPagination(+page, +limit)
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, //error code
        DT: data.DT //data
      })
    } else {
      let data = await userApiService.getAllUser()
      return res.status(200).json({
        EM: data.EM, // error message
        EC: data.EC, //error code
        DT: data.DT //data
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json({
      EM: 'error from server', // error message
      EC: '-1', //error code
      DT: '' //date
    })
  }
}
const createFunc = async (req, res) => {
  try {
    //validate
    let data = await userApiService.createNewUser(req.body)
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT //data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // error message
      EC: '-1', //error code
      DT: '' //date
    })
  }
}
const updateFunc = async (req, res) => {
  try {
    //validate
    let data = await userApiService.updateUser(req.body)
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT //data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // error message
      EC: '-1', //error code
      DT: '' //date
    })
  }
}
const deleteFunc = async (req, res) => {
  try {
    let data = await userApiService.deleteUser(req.body.id)
    return res.status(200).json({
      EM: data.EM, // error message
      EC: data.EC, //error code
      DT: data.DT //data
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'error from server', // error message
      EC: '-1', //error code
      DT: '' //date
    })
  }
}

const getUserAccount = async (req, res) => {
  return res.status(200).json({
    EM: 'ok', // error message
    EC: 0, //error code
    DT: {
      access_token: req.token,
      groupWithRoles: req.user.groupWithRoles,
      email: req.user.email,
      username: req.user.username
    }
  })
}
module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc,
  getUserAccount
}
