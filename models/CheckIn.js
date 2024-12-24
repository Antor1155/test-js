const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		date: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);

const CheckIn = model("CheckIn", schema);

module.exports = CheckIn;
