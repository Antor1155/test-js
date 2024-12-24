const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		title: String,
		content: String,
		banner: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Event = model("Event", schema);

module.exports = Event;
