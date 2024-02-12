const getLoginPage = (req, res) => {
  return res.render('login.ejs')
}

module.exports = { getLoginPage }
