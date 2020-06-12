//add path
const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
//need to make a Google route for this, don't forget
const googleRoutes = require('./google');
// Book routes
router.use("/books", bookRoutes);

//!!Don't forget to make this!! Google Routes
router.use("/google", googleRoutes);

//They do this in Activity 04, and it seem like a good trick. Stealing it.
// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;
