const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		gift: {
			type: Schema.Types.ObjectId,
			ref: "Gift",
		},
		coin: Number,
	},
	{
		timestamps: true,
	}
);

const AladinGiftDraft = model("AladinGiftDraft", schema);

module.exports = AladinGiftDraft;
