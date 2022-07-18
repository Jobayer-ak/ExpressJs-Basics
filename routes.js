const router = require("express").Router();
const {homeController, aboutController, contactController} = require("./controller")

router.get("/",homeController);

router.get("/about", aboutController);

router.get("/contact", contactController);

module.exports = router;
