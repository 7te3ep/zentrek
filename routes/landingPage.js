const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
   next();
});

router.get("", async (req, res) => {
   res.render(`landingPage.ejs`, { name: "landingPage" });
});

module.exports = router;
