const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./api/books");
const googleRoutes = require("./api/google");

// Book Routes
router.use("/api/books", bookRoutes);

// Google Routes
router.use("/api/google", googleRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
