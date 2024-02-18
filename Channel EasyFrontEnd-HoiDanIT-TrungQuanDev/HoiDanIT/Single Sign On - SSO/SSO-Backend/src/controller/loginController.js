import { v4 as uuidv4 } from 'uuid'
import loginRegisterService from '../service/loginRegisterService'
import { createJWT } from '../middleware/JWTAction'
import 'dotenv/config'
import nodemailer from 'nodemailer'

const getLoginPage = (req, res) => {
  // validate url
  const serviceURL = req.query.serviceURL

  return res.render('login.ejs', {
    redirectURL: serviceURL
  })
}

const verifySSOToken = async (req, res) => {
  try {
    // velidate domains

    // return jwt, refresh token
    const ssoToken = req.body.ssoToken

    // check ssoToken
    if (req.user && req.user.code && req.user.code === ssoToken) {
      const refreshToken = uuidv4()

      // update user
      await loginRegisterService.updateUserRefreshToken(
        req.user.email,
        refreshToken
      )

      // create access token
      let payload = {
        email: req.user.email,
        groupWithRoles: req.user.groupWithRoles,
        username: req.user.username
      }

      let token = createJWT(payload)

      // set cookies
      res.cookie('access_token', token, {
        // maxAge: +process.env.MAX_AGE_ACCESS_TOKEN,
        maxAge: 900 * 1000,
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
        path: '/'
      })

      res.cookie('refresh_token', refreshToken, {
        // maxAge: +process.env.MAX_AGE_REFRESH_TOKEN,
        maxAge: 3600 * 1000,
        httpOnly: true,
        domain: process.env.COOKIE_DOMAIN,
        path: '/'
      })

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
      return res.status(401).json({
        EM: 'not match ssoToken',
        EC: 1,
        DT: ''
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      EM: 'something wrong in the server...',
      EC: 0,
      DT: 'not match'
    })
  }
}

const getResetPasswordPage = (req, res) => {
  return res.render('forgot-password.ejs')
}

const sendCode = async (req, res) => {
  // validate email, check type account equal LOCAL

  // send code via email
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_APP_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD
    }
  })

  const OTP = Math.floor(100000 + Math.random() * 900000)

  console.log('>>> Start sending email')

  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: 'Duy Nghia Dev 👻', // sender address
      to: `${req.body.email}`, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: `
        <div>Bạn nhận được email này do yêu cầu reset lại mật khẩu trong series SSO.</div>
        <br />
        <div>Your OTP: ${OTP}</div>
      ` // html body
    })
    console.log('>>> End sending email')

    // update code in database
    await loginRegisterService.updateUserCode(OTP, req.body.email)
  } catch (error) {
    console.log('>>> error: ', error)
  }

  return res.status(200).json({
    EC: 0,
    DT: { email: req.body.email }
  })
}

module.exports = {
  getLoginPage,
  verifySSOToken,
  getResetPasswordPage,
  sendCode
}
