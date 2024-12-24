const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		transactionId: {
			type: String,
			required: true,
		},
		coins: {
			type: Number,
			required: true,
		},
		type: {
			type: Number,
			required: true,
		},
		tm: {
			type: Number,
			required: true,
		},
		gameId: {
			type: Number,
			required: true,
		},
		roomId: String,
		ext: String,
		remark: String,
	},
	{
		timestamps: true,
	}
);

const JoyTransaction = model("JoyTransaction", schema);

module.exports = JoyTransaction;
