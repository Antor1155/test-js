const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
    {
        user: {
            type: Types.ObjectId,
            ref: "User",
        },
        amount: Number,
    },
    {
        timestamps: true,
    }
);

const ReturnBeans = model("ReturnBeans", schema);

module.exports = ReturnBeans;
