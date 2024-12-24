const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		stream: {
			type: Types.ObjectId,
			ref: "Stream",

		},
	},
	{ timestamps: true }
);

// Add index on specific field
schema.index({ stream: 1 });

const Audience = model("Audience", schema);

module.exports = Audience;
