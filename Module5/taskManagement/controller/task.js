const task = require("../model/task");

exports.add = async (req, res) => {
    const data = await task.create(req.body);
    res.json({ massage: "save successfully", data });
};

exports.getList = async (req, res) => {
    const data = await task.find();
    res.json({ massage: "list load successfully", data });
};

exports.update = async (req, res) => {
    let data = await task.updateOne({ id: req.params.id }, req.body);
    data = await task.findById(req.params.id);
    res.json({ massage: "update successfully", data });
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    const data = await task.findByIdAndDelete({ _id: id });
    res.json({ massage: "delete successfully" });
};
