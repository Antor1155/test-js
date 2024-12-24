const { Schema, model } = require("mongoose");

const chatSchema = new Schema(
	{
		participants: {
			type: [
				{
					user: {
						type: Schema.Types.ObjectId,
						ref: "User",
						required: true,
						
					},
				},
			],
		},
		lastMessage: {
			type: Schema.Types.ObjectId,
			ref: "Message",
		},
		lastMessageTime: {
			type: Date,
		},
		pinedBy: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		timestamps: true,
	}
);

// Create index on user field within participants array
chatSchema.index({ "participants.user": 1 });

const Chat = model("Chat", chatSchema);

module.exports = Chat;
