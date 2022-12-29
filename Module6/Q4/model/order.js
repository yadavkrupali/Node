const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderschema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },

    productId: {
        type: Schema.Types.ObjectId,
        ref: "product",
    },

    prize: {
        type: Number,
        required: true,
    },

    qty: {
        type: String,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("order", orderschema);
