const { Schema, model } = require("mongoose");
const { CATEGORIES } = require("../../enums/gift");

const giftSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		codeName: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			enum: Object.values(CATEGORIES),

		},
		active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

giftSchema.index({ category: 1 })

const Gift = model("Gift", giftSchema);

module.exports = Gift;
