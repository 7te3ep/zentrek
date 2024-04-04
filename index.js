const express = require("express");

const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));
const port = 80;

app.listen(port, () => {
   console.log(`App listening on port http://localhost:${port}/`);
});

const landingPage = require("./routes/landingPage.js");
app.use("/", landingPage);

const quizz = require("./routes/quizz.js");
app.use("/quizz", quizz);

const results = require("./routes/results.js");
app.use("/results", results);
