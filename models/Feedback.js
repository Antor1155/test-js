const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		type: {
			type: String,
		},
		status: {
			type: String,
			enum: ["submitted", "completed"],
			default: "submitted",
		},
		email: String,
		phoneNumber: String,
		description: String,
		attachments: [String],
	},
	{
		timestamps: true,
	}
);

const Feedback = model("Feedback", schema);

module.exports = Feedback;
