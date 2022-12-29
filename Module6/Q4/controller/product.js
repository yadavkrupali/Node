const product = require("../model/product");

exports.add = async (req, res) => {
    const data = await product.create(req.body);
    res.json({ massage: "add successfully", data });
};

exports.getList = async (req, res) => {
    const data = await product.find();
    res.json({ massage: "List load successfully", data });
};

exports.update = async (req, res) => {
    const id = req.params.id;
    let data = await product.updateOne({ _id: id }, req.body);
    data = await product.findById(req.params.id);
    res.json({ massage: "update successfully", data });
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    const data = await product.findByIdAndDelete({ _id: id });
    res.json({ massage: "delete successfully" });
};
