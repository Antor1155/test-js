const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		feedback: {
			type: Types.ObjectId,
			ref: "feedback",
		},
		sender: {
			type: Types.ObjectId,
		},
		message: String,
		attachment: String,
	},
	{
		timestamps: true,
	}
);

const FeedbackReply = model("FeedbackReply", schema);

module.exports = FeedbackReply;
