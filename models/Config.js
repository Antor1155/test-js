const { Schema, model } = require("mongoose");

const configSchema = new Schema(
	{
		key: {
			type: String,
			unique: true,
		},
		value: {
			type: Object,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Config = model("Config", configSchema);

module.exports = Config;
