const { Schema, model, Types } = require("mongoose");
const { BAN_DURATION } = require("../enums/ban");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		deviceId: {
			type: String,
			required: true,
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
		reason: String,
	},
	{ timestamps: true }
);

// Add index on specific field
schema.index({ expiredAt: 1 });

const DeviceBan = model("DeviceBan", schema);

module.exports = DeviceBan;
