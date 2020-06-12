const router = require("express").Router();
const googleController = require("../../controllers/googleController");

//make router work
router   
    .route("/")
    .get(googleController.findAll);

module.exports = router;