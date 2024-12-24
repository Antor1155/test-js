const { Schema, model } = require("mongoose");

const bannerSchema = new Schema(
	{
		url: {
			type: String,
		},
		active: {
			type: Boolean,
			default: false,
		},
		content: String,
		title: String,
		type: {
			type: String,
			enu: ["image", "congratulate"],
			default: "image",
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		expiredAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Banner = model("Banner", bannerSchema);

module.exports = Banner;
