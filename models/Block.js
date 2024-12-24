const { Schema, model } = require("mongoose");

const blockSchema = new Schema(
	{
		blocker: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		victim: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

const Block = model("Block", blockSchema);

module.exports = Block;
