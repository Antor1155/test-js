const { Schema, model } = require("mongoose");

const bgImageSchema = new Schema(
	{
		url: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

const BgImage = model("BgImage", bgImageSchema);

module.exports = BgImage;
