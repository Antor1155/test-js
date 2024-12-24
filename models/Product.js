const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		codeName: {
			type: String,
		},
		description: String,
		image: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			enum: ["frame", "ride", "bubble", "entryCard"],
		},
		price: [
			{
				validity: {
					type: String,
					enum: ["1d", "3d", "7d", "15d", "1m", "3m"],
				},
				beans: Number,
			},
		],
		gift: {
			type: String,
			enum: ["bronze-vip", "silver-vip", "golden-vip"],
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

schema.index({ active: 1 })

const Product = model("Product", schema);

module.exports = Product;
