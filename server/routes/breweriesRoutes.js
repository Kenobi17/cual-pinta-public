const router = require("express").Router(),
  controller = require("../controllers/breweriesControllers");

//GET ALL BREWERIES ROUTE
router.get("/", controller.getAll);
//GET ONE BREWERY ROUTE
router.get("/:id", controller.getOne);

module.exports = router;
