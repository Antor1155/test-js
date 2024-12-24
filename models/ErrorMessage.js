const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		message: String,
		data: Object,
		path: String,
	},
	{
		timestamps: true,
	}
);

const ErrorMessage = model("ErrorMessage", schema);

module.exports = ErrorMessage;
