const router = require("express").Router(),
  middleware = require("../middleware/middleware"),
  controller = require("../controllers/reviewsControllers");

//GET USER'S REVIEWS ROUTE
router.get("/user", middleware.isAuthorized, controller.get);

//CHECK IF USER ALREADY HAS A REVIEW
router.post("/check", middleware.isAuthorized, controller.check);

//CREATE NEW REVIEW ROUTE
router.post("/new", middleware.isAuthorized, controller.post);

//UPDATE REVIEW ROUTE
router.put("/update", middleware.isAuthorized, controller.put);

//DELETE REVIEW ROUTE
router.delete("/delete", middleware.isAuthorized, controller.delete);

module.exports = router;
