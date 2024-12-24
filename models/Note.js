const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		title: String,
		content: String,
	},
	{
		timestamps: true,
	}
);

const Note = model("Note", schema);

module.exports = Note;
