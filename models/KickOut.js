const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		host: {
			type: Types.ObjectId,
			ref: "User",
		},
		audience: {
			type: Types.ObjectId,
			ref: "User",
		},
		expiredAt: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);


// adding index to specific fields on acending order 
schema.index({ audience: 1 })
schema.index({ host: 1 })
schema.index({ expiredAt: 1 })


const KickOut = model("KickOut", schema);

module.exports = KickOut;
