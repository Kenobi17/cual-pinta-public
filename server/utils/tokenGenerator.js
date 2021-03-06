require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenGenerator = (user_id) => {
  const payload = {
    user: {
      id: user_id,
    },
  };
  return jwt.sign(payload, process.env.jwtSecret, {});
};

module.exports = tokenGenerator;
