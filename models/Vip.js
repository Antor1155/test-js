const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		type: {
			type: String,
			enum: ["bronze-vip", "silver-vip", "golden-vip"],
		},
		expireDate: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Vip = model("Vip", schema);

module.exports = Vip;
