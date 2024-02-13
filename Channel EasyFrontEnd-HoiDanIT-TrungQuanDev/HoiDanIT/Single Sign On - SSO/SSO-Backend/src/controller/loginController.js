const getLoginPage = (req, res) => {
  const arrMessage = req.flash('data')
  const error = arrMessage[0] ? arrMessage[0] : ''
  const usernameInput = arrMessage[1] ? arrMessage[1] : ''

  return res.render('login.ejs', {
    error: error,
    usernameInput: usernameInput
  })
}

module.exports = { getLoginPage }
