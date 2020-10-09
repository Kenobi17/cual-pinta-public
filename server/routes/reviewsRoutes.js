const router = require("express").Router(),
  db = require("../database/db"),
  middleware = require("../middleware/middleware");

//GET USER'S REVIEWS ROUTE
router.get("/user", middleware.isAuthorized, async (req, res) =>{
  try {
    const reviews = await db.query(
      "SELECT * FROM reviews WHERE user_id = $1", 
      [req.user.id]
    )
    res.status(200).json({
      status: "success",
      data: {
        reseñas_usuario: reviews.rows,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
})

//CREATE NEW REVIEW ROUTE
router.post("/new", middleware.isAuthorized, async (req, res) => {
  try {
    const review = await db.query(
      "SELECT * FROM reviews WHERE user_id = $1 AND brewery_id = $2",
      [req.user.id, req.body.brewery_id]
    );
    if (review.rows.length !== 0) {
      return res.json("Ya has realizado una reseña sobre este lugar");
    }
    const newReview = await db.query(
      "INSERT INTO reviews (user_id, brewery_id, body, rating) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.user.id, req.body.brewery_id, req.body.body, req.body.rating]
    );
    res.json(newReview.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

//UPDATE REVIEW ROUTE
router.put("/update", middleware.isAuthorized, async (req, res) => {
  try {
    const updateReview = await db.query(
      "UPDATE reviews SET body = $1, rating = $2 WHERE review_id = $3 AND user_id = $4 RETURNING *",
      [req.body.body, req.body.rating, req.body.review_id, req.user.id]
    );
    if (updateReview.rows.length === 0) {
      return res.json("Esta reseña no es tuya");
    }
    res.json(updateReview.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

//DELETE REVIEW ROUTE
router.delete("/delete", middleware.isAuthorized, async (req, res) => {
  try {
    const deleteReview = await db.query(
      "DELETE FROM reviews WHERE review_id = $1 AND user_id = $2 RETURNING *",
      [req.body.review_id, req.user.id]
    );
    if (deleteReview.rows.length === 0) {
      return res.json("Esta reseña no es tuya");
    }
    res.json("Reseña eliminada");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Error del servidor");
  }
});

module.exports = router;
