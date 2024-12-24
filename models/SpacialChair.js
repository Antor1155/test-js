const { Schema, model, Types } = require("mongoose");

const spacialChairSchema = new Schema(
	{
		host: {
			type: Types.ObjectId,
			ref: "User",
		},
		buyer: {
			type: Types.ObjectId,
			ref: "User",
		},
		reservedExpire: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

const SpacialChair = model("SpacialChair", spacialChairSchema);

module.exports = SpacialChair;
