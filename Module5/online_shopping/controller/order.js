const order = require("../model/order");

exports.create = async (req, res) => {
    req.body.userId = req.user.id;
    const data = await order.create(req.body);
    res.json({ message: "order placed successfully.", data });
};

exports.getList = async (req, res) => {
    const data = await order.find({ userId: req.user.id });
    res.json({ message: "list load successfully.", data });
};
