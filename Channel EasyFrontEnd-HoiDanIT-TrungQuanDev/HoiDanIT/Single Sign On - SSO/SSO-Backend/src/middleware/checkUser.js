const isLogin = (req, res, next) => {
  console.log('check path req.pathname:', req.path)
  if (req.isAuthenticated()) {
    // req.isAuthenticated() return true if user is logged in
    if (req.path === '/login') {
      res.redirect('/')
    }
    next()
  } else {
    if (req.path === '/login') {
      next()
    } else {
      res.redirect('/login')
    }
  }
}

module.exports = { isLogin }
