const router = require("express").Router(),
  db = require("../database/db");

//GET ALL BREWERIES ROUTE
router.get("/", async (req, res) => {
  try {
    const breweries = await db.query("SELECT * FROM breweries");
    res.status(200).json({
      status: "success",
      cantidad: breweries.rowCount,
      data: {
        cervecerias: breweries.rows,
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
    res.status(200).json({
      status: "success",
      data: {
        cerveceria: brewery.rows[0],
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

module.exports = router;
