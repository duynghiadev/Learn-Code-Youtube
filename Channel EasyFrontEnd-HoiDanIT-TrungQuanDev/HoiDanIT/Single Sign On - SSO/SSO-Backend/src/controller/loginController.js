const getLoginPage = (req, res) => {
  // validate url
  const serviceURL = req.query.serviceURL

  return res.render('login.ejs', {
    redirectURL: serviceURL
  })
}

const verifySSOToken = (req, res) => {
  return res.status(200).json({
    EM: 'OK',
    EC: 0,
    DT: req.body.ssoToken
  })
}

module.exports = { getLoginPage, verifySSOToken }
