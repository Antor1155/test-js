const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		visitor: {
			type: Types.ObjectId,
			ref: "User",
		},
		seen: {
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
schema.index({ seen: 1 })
schema.index({ createdAt: 1 })

const Visitor = model("Visitor", schema);

module.exports = Visitor;
