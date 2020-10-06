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
//GET ONE BREWERIE ROUTE
router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const brewery = await db.query("SELECT * FROM breweries WHERE slug = $1", [
      slug,
    ]);
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
