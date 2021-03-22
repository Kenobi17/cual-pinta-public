const router = require("express").Router(),
  middleware = require("../middleware/middleware"),
  controller = require("../controllers/userAuthenticationControllers");

//REGISTER ROUTE
router.post("/register", middleware.isValidInfo, controller.register);
//LOGIN ROUTE
router.post("/login", middleware.isValidInfo, controller.login);
//VERIFY ROUTE
router.get("/verify", middleware.isAuthorized, controller.verify);

module.exports = router;
