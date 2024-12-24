const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		date: {
			type: String,
			required: true,
		},
		numOfRockets: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const HostDailyRocket = model("HostDailyRocket", schema);

module.exports = HostDailyRocket;
