const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },

    taskName: {
        type: String,
        required: true,
    },

    taskSatuts: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("task", taskSchema);
