const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		subscription: {
			type: String,
		},
		message: {
			data: {
				type: String,
			},
			messageId: {
				type: Number,
			},
			publishTime: {
				type: Date,
			},
		},
	},
	{ timestamps: true }
);

const PubSubMessage = model("PubSubMessage", schema);

module.exports = PubSubMessage;
