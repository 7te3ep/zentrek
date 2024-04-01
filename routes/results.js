const express = require("express");
const router = express.Router();
const items = require("../items.json");
router.use((req, res, next) => {
   next();
});

router.post("", async (req, res) => {
   const tags = ["main"];
   Object.values(req.body || {}).forEach((tag) => tags.push(tag));
   const checkList = {};
   Object.entries(items).forEach((item) => {
      let included = false;
      for (const tag of item[1].tags) {
         if (tags.includes(tag)) {
            included = true;
            break;
         }
      }
      if (included)
         checkList[item[1].category]
            ? checkList[item[1].category].push(item[0])
            : (checkList[item[1].category] = [item[0]]);
   });
   console.log(checkList);
   res.render(`results.ejs`, {
      name: "results",
      checkList: checkList,
      traduction: {
         main: "General",
         shoes: "Chaussures",
         clothes: "Vetements",
         hygiene: "Hygiène",
         tech: "High tech",
         cook: "Cuisine",
         aid: "Pharmacie",
         legal: "Formalités",
      },
   });
});

module.exports = router;
