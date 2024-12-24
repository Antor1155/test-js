const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		sender: {
			type: Types.ObjectId,
			ref: "User",
		},
		stream: {
			type: Types.ObjectId,
			ref: "Stream",
		},

		coinAmount: {
			type: Number,
			required: true,
		},

		numOfUsers: {
			type: Number,
			required: true,
		},

		duration: {
			type: Number,
			required: true,
		},

		isCompleted: {
			type: Boolean,
			required: true,
			default: false,
		},

		users: [
			{
				user: {
					type: Types.ObjectId,
					ref: "User",
					required: true,
				},
				isReward: Boolean,
			},
		],
	},
	{ timestamps: true }
);

// Create index for user field
// schema.index({ user: 1 });

// Compound unique index on `users.user`
// schema.index({ "users.user": 1 }, { unique: true });

const Rocket = model("Rocket", schema);

module.exports = Rocket;
