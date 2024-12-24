const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
	{
		type: {
			type: String,
			enum: ["share", "profile", "text", "stream"],
			default: "text",
		},
		extra: {
			type: Schema.Types.Mixed,
		},
		sender: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		to: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		chatRef: {
			type: Schema.Types.ObjectId,
			ref: "Chat",
			required: true,
			index: true
		},
		replayOf: {
			type: Schema.Types.ObjectId,
			ref: "Message",
		},
		content: {
			type: {
				text: {
					type: String,
					default: "",
				},
				attachment: String,
				voice: String,
			},
		},
		seen: {
			type: [
				{
					type: Schema.Types.ObjectId,
					ref: "User",
				},
			],
			select: false,
		},
		deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
		reactions: {
			type: [
				{
					reactor: {
						type: Schema.Types.ObjectId,
						ref: "User",
						required: true,
					},
					reaction: {
						type: String,
						required: true,
					},
				},
			],
		},
		deletedAt: {
			type: Date,

		},
	},
	{
		timestamps: true,
	}
);

messageSchema.index({ chatRef: 1, deletedAt: 1 });

const Message = model("Message", messageSchema);



module.exports = Message;
