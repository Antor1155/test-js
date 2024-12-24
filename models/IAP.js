const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		productId: {
			type: String,
			required: true,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const InAppProduct = model("inAppProduct", schema);

module.exports = InAppProduct;
