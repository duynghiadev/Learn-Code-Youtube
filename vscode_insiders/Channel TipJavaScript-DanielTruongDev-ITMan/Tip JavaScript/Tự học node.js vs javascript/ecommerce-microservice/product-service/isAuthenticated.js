const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  // Check for Authorization header and get token
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Verify token
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      // Return error if token verification fails
      return res.status(403).json({
        message: "Invalid token",
        error: err.message,
      });
    }

    req.user = decoded; // Attach decoded token data to req.user
    next();
  });
};

module.exports = {
  isAuthenticated,
};
