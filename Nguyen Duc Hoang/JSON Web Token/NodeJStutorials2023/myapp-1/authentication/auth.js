export default function checkToken(req, res, next) {
  // bypass login, register
  if (
    req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim() ||
    req.url.toLowerCase().trim() == '/users/register'.toLowerCase().trim()
  ) {
    next()
    return
  }
  // other requests
  // get and validate token
  debugger
}
