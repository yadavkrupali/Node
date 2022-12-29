const user = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    const data = await user.create(req.body);
    res.json({ massage: "register successfully", data });
};

exports.login = async (req, res) => {
    const userdata = await user.findOne({ email: req.body.email });
    if (!userdata) {
        res.status(400).json({ massage: "Email not registered" });
    }
    if (!bcrypt.compareSync(req.body.password, userdata.password)) {
        res.status(400).json({ massage: "Worng password" });
    }
    userdata._doc.token = jwt.sign({ id: userdata.id }, "shhhhh");

    res.json({ massage: "login successfully ", data: userdata });
};

exports.getProfile = async (req, res) => {
    res.json({ massage: "details load successfully ", data: req.user });
};
