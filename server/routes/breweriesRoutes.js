const router = require("express").Router(),
  db = require("../database/db"),
  axios = require("axios");

//GET ALL BREWERIES ROUTE
router.get("/", async (req, res) => {
  try {
    const breweries = await db.query(
      "SELECT * FROM breweries b LEFT JOIN (SELECT brewery_id AS brewery, COUNT(*) AS reviews, TRUNC(AVG(rating), 1) AS rating_avg FROM reviews GROUP BY brewery_id) r ON b.brewery_id = r.brewery ORDER BY b.brewery_id;"
    );
    //CREATES A NEW ARRAY WHICH CONTAINS ALL THE INFO OF EACH BREWERY AND
    //ALSO FETCHS EVERY IMAGE FROM THEIR INSTAGRAM
    const breweriesData = await Promise.all(
      breweries.rows.map(async (brewery) => {
        const response = await axios.get(`${brewery.instagram}?__a=1`);
        const logo = await response.data.graphql.user.profile_pic_url_hd;
        const data = { ...brewery, image: logo };
        return data;
      })
    );
    res.status(200).json({
      status: "success",
      cantidad: breweries.rowCount,
      data: {
        cervecerias: breweriesData,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});
//GET ONE BREWERY ROUTE
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const brewery = await db.query(
      "SELECT * FROM breweries WHERE brewery_id = $1",
      [id]
    );
    const reviews = await db.query(
      "SELECT * FROM reviews WHERE brewery_id = $1",
      [id]
    );
    //GET BREWERY IMAGE
    const response = await axios.get(`${brewery.rows[0].instagram}?__a=1`);
    const logo = await response.data.graphql.user.profile_pic_url_hd;
    //CREATES A NEW BREWERY OBJECT CONTAINING ALL THE DATA FROM THE BREWERY
    //AND THE IMAGE
    const breweryData = { ...brewery.rows[0], image: logo };
    res.status(200).json({
      status: "success",
      data: {
        cerveceria: breweryData,
        reseñas: reviews.rows,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

module.exports = router;
