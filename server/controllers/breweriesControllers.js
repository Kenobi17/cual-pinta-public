const db = require("../database");
module.exports = {
  getAll: async (req, res) => {
    try {
      const name = req.query.name || "";
      const zone = req.query.zone || "";
      const breweries = await db.query(
        "SELECT * FROM breweries b LEFT JOIN (SELECT brewery_id AS brewery, COUNT(*) AS reviews, (TRUNC(AVG(rating), 1)) AS rating_avg FROM reviews GROUP BY brewery_id) r ON b.brewery_id = r.brewery WHERE unaccent(b.name) ILIKE unaccent($1) AND zone ILIKE $2 ORDER BY r.rating_avg DESC NULLS LAST",
        [`%${name}%`, `%${zone}%`]
      );
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
  },
  getOne: async (req, res) => {
    try {
      const id = req.params.id;
      const brewery = await db.query(
        "SELECT * FROM breweries b LEFT JOIN (SELECT brewery_id AS brewery, COUNT(*) AS reviews, TRUNC(AVG(rating), 1) AS rating_avg FROM reviews GROUP BY brewery_id) r on b.brewery_id = r.brewery WHERE brewery_id = $1",
        [id]
      );
      const reviews = await db.query(
        "SELECT *, TO_CHAR(\"date\", 'DD/MM/YYYY') AS date FROM reviews r LEFT JOIN (SELECT first_name, last_name, user_id FROM users) u ON r.user_id = u.user_id WHERE brewery_id = $1 ORDER BY r.review_id DESC",
        [id]
      );
      res.status(200).json({
        status: "success",
        data: {
          cerveceria: brewery.rows[0],
          reseñas: reviews.rows,
        },
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error del servidor");
    }
  },
};
