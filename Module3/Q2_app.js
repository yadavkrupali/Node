// Q2 .Create localhost server using express
const express = require("express");
const app = express();
const port = 8000;
app.listen(port, function () {
    console.log("server is runing on");
});
