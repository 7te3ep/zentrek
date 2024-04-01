const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
   next();
});

router.get("", async (req, res) => {
   res.render(`quizz.ejs`, { name: "quizz" });
});

module.exports = router;
