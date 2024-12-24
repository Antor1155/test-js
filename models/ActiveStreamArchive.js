const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		activeAudioStream: {
			type: Number,
			default: 0,
		},
		activeVideoStream: {
			type: Number,
			default: 0,
		},
		activePkStream: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const ActiveStreamArchive = model("ActiveStreamArchive", schema);

module.exports = ActiveStreamArchive;
