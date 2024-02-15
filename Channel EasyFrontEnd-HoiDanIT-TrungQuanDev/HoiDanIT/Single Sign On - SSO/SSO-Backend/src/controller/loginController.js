import { v4 as uuidv4 } from 'uuid'
import loginRegisterService from '../service/loginRegisterService'
import { createJWT } from '../middleware/JWTAction'

const getLoginPage = (req, res) => {
  // validate url
  const serviceURL = req.query.serviceURL

  return res.render('login.ejs', {
    redirectURL: serviceURL
  })
}

const verifySSOToken = async (req, res) => {
  // velidate domains

  // return jwt, refresh token
  const ssoToken = req.body.ssoToken

  // check ssoToken
  console.log('>>> req.user:', req.user)
  if (req.user && req.user.code && req.user.code === ssoToken) {
    const refreshToken = uuidv4()

    // update user
    await loginRegisterService.updateUserRefreshToken(
      req.user.email,
      refreshToken
    )

    // create jwt token
    let payload = {
      email: req.user.email,
      groupWithRoles: req.user.groupWithRoles,
      username: req.user.username
    }

    let token = createJWT(payload)

    const resData = {
      access_token: token,
      refresh_token: refreshToken,
      email: req.user.email,
      groupWithRoles: req.user.groupWithRoles,
      username: req.user.username
    }

    // destroy session
    req.session.destroy(function (err) {
      req.logout()
    })

    return res.status(200).json({
      EM: 'OK',
      EC: 0,
      DT: resData
    })
  } else {
    return res.status(200).json({
      EM: 'OK',
      EC: 0,
      DT: 'not match'
    })
  }
}

module.exports = { getLoginPage, verifySSOToken }
