require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  port = process.env.PORT || 4000,
  app = express();

//-----MIDDLEWARES-----
app.use(express.json());
app.use(cors());

//-----ROUTES-----
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Authentication Route
app.use("/authentication", require("./routes/userAuthenticationRoutes"));
app.use("/api/v1/cervecerias", require("./routes/breweriesRoutes"));
//-----APP LISTEN-----
app.listen(port, () => {
  console.log(`Server up at http://localhost:${port}`);
});
