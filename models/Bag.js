const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		productType: {
			type: String,
			enum: ["frame", "ride", "entryCard", "bubble"],
		},
		product: {
			type: Types.ObjectId,
			ref: "Product",
		},
		expireDate: {
			type: Date,
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

// adding index to specific fields on acending order 
schema.index({ user: 1 })
schema.index({ productType: 1 })
schema.index({ expireDate: 1 })
schema.index({ active: 1 })
schema.index({ createdAt: 1 })

const Bag = model("Bag", schema);

module.exports = Bag;
