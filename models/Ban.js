const { Schema, model, Types } = require("mongoose");
const { BAN_DURATION } = require("../enums/ban");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		deviceBan: {
			type: Types.ObjectId,
			ref: "DeviceBan",
		},
		duration: {
			type: String,
			enum: Object.values(BAN_DURATION),
			required: true,
		},
		expiredAt: {
			type: Date,
			required: true,
		},
		isHostBan: {
			type: Boolean,
			default: false,
		},
		reason: String,
	},
	{ timestamps: true }
);

// Add index on specific field
schema.index({ expiredAt: 1 });
schema.index({ expiredAt: 1 });

const Ban = model("Ban", schema);

module.exports = Ban;
