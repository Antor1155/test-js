const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		type: {
			type: String,
			enum: ["connect", "disconnect"],
			required: true,
		},
	},
	{ timestamps: true }
);

const Socket = model("Socket", schema);

module.exports = Socket;
