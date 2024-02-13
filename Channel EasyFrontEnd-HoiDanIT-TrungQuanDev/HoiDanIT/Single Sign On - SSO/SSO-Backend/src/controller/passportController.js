import passport from 'passport'
import LocalStrategy from 'passport-local'
import loginRegisterService from '../service/loginRegisterService'

const configPassport = () => {
  passport.use(
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        const rawData = {
          valueLogin: username,
          password: password
        }

        let res = await loginRegisterService.handleUserLogin(rawData)

        if (res && +res.EC === 0) {
          return done(null, res.DT)
        } else {
          return done(
            null,
            false,
            req.flash('data', [res.EM, username, res.EC])
          )
        }
      }
    )
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
