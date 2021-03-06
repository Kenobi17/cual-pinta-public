const router = require("express").Router(),
  tokenGenerator = require("../utils/tokenGenerator"),
  middleware = require("../middleware/middleware"),
  db = require("../database"),
  bcrypt = require("bcrypt");

//REGISTER ROUTE
router.post("/register", middleware.isValidInfo, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json("Este email ya ha sido registrado");
    }
    const saltRound = 10,
      salt = await bcrypt.genSalt(saltRound),
      hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await db.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [firstName, lastName, email, hashedPassword]
    );
    const token = tokenGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});
//LOGIN ROUTE
router.post("/login", middleware.isValidInfo, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Email o contraseña incorrecta");
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json("Email o contraseña incorrecta");
    }
    const token = tokenGenerator(user.rows[0].user_id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});
//VERIFY ROUTE
router.get("/verify", middleware.isAuthorized, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

module.exports = router;
