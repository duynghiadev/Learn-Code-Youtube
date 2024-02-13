import passport from 'passport'
import LocalStrategy from 'passport-local'
import loginRegisterService from '../service/loginRegisterService'

const configPassport = () => {
  passport.use(
    new LocalStrategy(async function verify(username, password, cb) {
      const rawData = {
        valueLogin: username,
        password: password
      }

      let res = await loginRegisterService.handleUserLogin(rawData)

      if (res && +res.EC === 0) {
        return cb(null, res.DT)
      } else {
        return cb(null, false, { message: res.EM })
      }
    })
  )
}

const handleLogout = (req, res, next) => {
  // req.logout()
  // res.redirect('/login')

  req.session.destroy(function (err) {
    req.logout()
    res.redirect('/') // Inside a callback...bulletproof!
  })
}

module.exports = { configPassport, handleLogout }
