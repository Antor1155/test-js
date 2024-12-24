const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		gems: {
			type: Number,
			default: 0,
			required: true,
		},
		payableUsd: {
			type: Number,
			required: true,
		},
		exchangeRate: {
			type: Number,
		},
		status: {
			type: String,
			enum: ["pending", "canceled", "completed"],
			default: "pending",
		},
		payoutMethod: {
			type: String,
			enum: ["bKash", "nagad", "binance"],
		},
		payoutAccount: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Withdraw = model("Withdraw", schema);

module.exports = Withdraw;
