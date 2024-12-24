const { Schema, model, Types } = require("mongoose");

const gameTransactionSchema = new Schema(
	{
		game_name: {
			type: String,
			enum: ["TEEN_PATTI", "LUCKY_77", "FERRIS_WHEEL"],
			required: true,
		},
		user: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
		spend: {
			type: Number,
			default: 0,
		},
		earned: {
			type: Number,
			default: 0,
		},
		result: {
			type: String,
			enum: ["win", "loss", "refund"],
		},
		selectedPot: {
			type: String,
		},
		wonPot: {
			type: String,
		},
		balance: {
			type: String,
		},
		roundNumber: { type: Number },
	},
	{
		timestamps: true,
	}
);

const GameTransaction = model("GameTransaction", gameTransactionSchema);

module.exports = GameTransaction;
