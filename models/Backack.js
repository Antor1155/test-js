const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",

		},
		gift: {
			type: Schema.Types.ObjectId,
			ref: "Gift",

		},
	},
	{
		timestamps: true,
	}
);

// Add index on specific field
schema.index({ user: 1 });
schema.index({ gift: 1 });

const Backpack = model("Backpack", schema);

module.exports = Backpack;
