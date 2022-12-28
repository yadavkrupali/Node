// Q3 . Create basic “Hello world” app using node and express
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world");
});
app.listen(8000, (result) => {
    console.log("server is runing");
});
