const isLogin = (req, res, next) => {
  console.log('check path req.pathname:', req.path)
  if (req.isAuthenticated()) {
    // req.isAuthenticated() return true if user is logged in
    if (req.path === '/login') {
      return res.redirect('/')
    }
    next()
  } else {
    if (req.path === '/login') {
      next()
    } else {
      return res.redirect('/login')
    }
  }
}

module.exports = { isLogin }
