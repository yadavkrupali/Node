const express = require("express");
const taskRoutes = require("./routes/task");
const app = express();
const db = require("./db_connection");
app.use(express.json());

app.use("/task", taskRoutes);

app.listen(8000, () => {
    console.log("server is running");
});
