const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		name: {
			type: String,
		},
		gifUrl: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
		playingDurationMs: {
			type: Number,
			required: true,
			default: 2000,
		},
	},
	{
		timestamps: true,
	}
);

const Emoji = model("Emoji", schema);

module.exports = Emoji;
