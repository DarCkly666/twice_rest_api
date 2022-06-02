const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_TOKEN_KEY);
  return token;
};

module.exports = createToken;
