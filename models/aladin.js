const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		amount: {
			type: Number,
			required: true,
		},
		percentage: {
			type: Number,
		},
		distributed: {
			type: Boolean,
			required: false,

		},
	},
	{
		timestamps: true,
	}
);

// Add index on specific field
schema.index({ distributed: 1 });

const Aladin = model("Aladin", schema);

module.exports = Aladin;
