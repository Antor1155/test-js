const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
			required: true,
		},
		userId: Number,
		game_round_id: String,
		game_id: Number,
		diff_msg: String,
		currency_diff: Number,
		balance_before: Number,
		balance_after: Number,
		room_id: String,
		order_id: String,
	},
	{
		timestamps: true,
		collection: "rolagamehistory",
	}
);

module.exports = model("rolagamehistory", schema);
