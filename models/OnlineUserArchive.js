const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		activeUser: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const OnlineUserArchive = model("OnlineUserArchive", schema);

module.exports = OnlineUserArchive;
