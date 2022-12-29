const mongoose = require("mongoose");
const { Schema } = mongoose;

const productschema = new Schema({
    category: {
        type: String,
        required: true,
    },

    productName: {
        type: String,
        required: true,
    },

    prize: {
        type: Number,
        required: true,
    },

    discripation: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("product", productschema);
