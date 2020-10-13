require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  port = process.env.PORT || 4000,
  app = express();

//-----MIDDLEWARES-----
app.use(express.json());
app.use(cors());

//-----ROUTES-----
//Authentication Route
app.use("/authentication", require("./routes/userAuthenticationRoutes"));
//Breweries Route
app.use("/api/v1/cervecerias", require("./routes/breweriesRoutes"));
//Reviews Route
app.use("/api/v1/reviews", require("./routes/reviewsRoutes"));
//-----APP LISTEN-----
app.listen(port, () => {
  console.log(`Server up at http://localhost:${port}`);
});
