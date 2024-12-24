const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		task: {
			type: String,
			required: true,
		},
		data: {
			type: Object,
		},
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

// adding index to specific fields on acending order 
schema.index({ user: 1 })
schema.index({ createdAt: 1 })

const Activity = model("Activity", schema);

module.exports = Activity;
