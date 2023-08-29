const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Bạn không thể truy cập vào được");
  try {
    const checkToken = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = checkToken;
    next();
  } catch (err) {
    res.status(400).send("Token không hợp lệ");
  }
};
