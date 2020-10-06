require("dotenv").config();
const jwt = require("jsonwebtoken");

const middleware = {
  isAuthorized: async (req, res, next) => {
    const jwToken = req.header("token");
    if (!jwToken) {
      return res.status(403).json("Inicia sesión primero");
    }
    try {
      const payload = jwt.verify(jwToken, process.env.jwtSecret);
      req.user = payload.user;
      next();
    } catch (error) {
      return res.status(401).json("Token inválido");
    }
  },

  isValidInfo: (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    validEmail = (userEmail) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    };
    if (req.path === "/register") {
      if (![firstName, lastName, email, password].every(Boolean)) {
        return res.status(422).json("Completa todos los campos!");
      } else if (!validEmail(email)) {
        return res.status(422).json("Email inválido");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(422).json("Completa todos los campos!");
      } else if (!validEmail(email)) {
        return res.status(422).json("Email inválido");
      }
    }
    next();
  },
};

module.exports = middleware;
