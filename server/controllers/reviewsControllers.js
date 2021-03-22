const db = require("../database");
module.exports = {
  get: async (req, res) => {
    try {
      const reviews = await db.query(
        "SELECT * FROM reviews WHERE user_id = $1",
        [req.user.id]
      );
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
  },
  check: async (req, res) => {
    try {
      const review = await db.query(
        "SELECT * FROM reviews WHERE user_id = $1 AND brewery_id = $2",
        [req.user.id, req.body.brewery_id]
      );
      if (review.rows.length !== 0) {
        return res.status(200).json({
          data: {
            hasReview: true,
            review_id: review.rows[0].review_id,
          },
        });
      } else {
        return res.json({
          data: {
            hasReview: false,
          },
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error del servidor");
    }
  },
  post: async (req, res) => {
    try {
      const review = await db.query(
        "SELECT * FROM reviews WHERE user_id = $1 AND brewery_id = $2",
        [req.user.id, req.body.brewery_id]
      );
      if (review.rows.length !== 0) {
        return res
          .status(400)
          .json("Ya has realizado una reseña sobre este lugar");
      } else if (req.body.body.length < 20) {
        return res
          .status(400)
          .json("Tu reseña debe contener al menos 20 caracteres");
      }
      const newReview = await db.query(
        "INSERT INTO reviews (user_id, brewery_id, body, rating) VALUES ($1, $2, $3, $4) RETURNING *",
        [req.user.id, req.body.brewery_id, req.body.body, req.body.rating]
      );
      res.status(200).json(newReview.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error del servidor");
    }
  },
  put: async (req, res) => {
    try {
      if (req.body.body.length < 20) {
        return res
          .status(400)
          .json("Tu reseña debe contener al menos 20 caracteres");
      }
      const updateReview = await db.query(
        "UPDATE reviews SET body = $1, rating = $2 WHERE review_id = $3 AND user_id = $4 RETURNING *",
        [req.body.body, req.body.rating, req.body.review_id, req.user.id]
      );
      if (updateReview.rows.length === 0) {
        return res.status(401).json("Esta reseña no es tuya");
      }
      res.status(200).json(updateReview.rows[0]);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error del servidor");
    }
  },
  delete: async (req, res) => {
    try {
      const deleteReview = await db.query(
        "DELETE FROM reviews WHERE review_id = $1 AND user_id = $2 RETURNING *",
        [req.headers.reviewid, req.user.id]
      );
      if (deleteReview.rows.length === 0) {
        return res.status(401).json("Esta reseña no es tuya");
      }
      res.status(200).json("Reseña eliminada");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error del servidor");
    }
  },
};
