const jwt = require("jsonwebtoken");
const user = require("../model/user");

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ massage: "unauthorization" });
    }
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "shhhhh", async (err, data) => {
        if (err) {
            return res.status(401).json({ massage: "unauthorization" });
        }
        req.user = await user.findById(data.id);
        next();
    });
};
