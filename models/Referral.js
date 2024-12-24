const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		referredBy: {
			type: Types.ObjectId,
			ref: "User",
		},
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		deviceId: {
			type: String,
			required: true,
		},
		claimed: {
			type: Boolean,
			default: false,
		},
		coin: Number,
	},
	{
		timestamps: true,
	}
);

const Referral = model("Referral", schema);

module.exports = Referral;
