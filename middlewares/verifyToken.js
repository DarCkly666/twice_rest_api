const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "No token provided",
    });
  }
  jwt.verify(token, process.env.SECRET_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Invalid token",
      });
    }
    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
