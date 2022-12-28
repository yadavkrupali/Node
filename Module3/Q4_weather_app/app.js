const express = require("express");
const geocode = require("./geocode");
const hbs = require("hbs");
const path = require("path");
const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const partialPath = path.join(__dirname, "partial");
hbs.registerPartials(partialPath);

console.log(partialPath);

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/wheather", function (req, res) {
    const city = req.query.location;

    geocode(city, (result) => {
        res.json(result);
    });
});

app.listen(8000, (result) => {
    console.log("server is runing");
});
