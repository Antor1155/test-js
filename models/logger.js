const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loggerSchema = new Schema(
	{
		log: {
			type: String,
			default: null,
		},
		free_object: {
			type: Object,
			default: null,
		},
	},
	{
		collection: "logger",
		timestamps: true,
	}
);

const logger = mongoose.model("logger", loggerSchema);

module.exports = logger;
