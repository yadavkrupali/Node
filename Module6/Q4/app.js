const express = require("express");
const app = express();
const db = require("./db.connection");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");
app.use(express.json());

app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/order", orderRoutes);

app.listen(8000, (req, res) => {
    console.log("sever is running");
});
