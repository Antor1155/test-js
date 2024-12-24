const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		gift: {
			type: String,
			enum: ["hammer", "chisel"],
		},
		sender: {
			type: Types.ObjectId,
			ref: "User",
		},
		beans: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

const AlibabaGiftTracker = model("AlibabaGiftTracker", schema);

module.exports = AlibabaGiftTracker;
