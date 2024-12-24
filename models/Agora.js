const { Schema, model } = require("mongoose");

const agoraSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		projectID: {
			type: String,
			required: true,
			unique: true,
		},
		appID: {
			type: String,
			required: true,
			unique: true,
		},
		appCertificate: {
			type: String,
			required: true,
			unique: true,
		},
		customerID: {
			type: String,
			required: true,
			unique: true,
		},
		customerSecret: {
			type: String,
			required: true,
			unique: true,
		},
		expired: {
			type: Date,
		},
		active: {
			type: Boolean,
			default: false,
		},
		totalUsagesSecond: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Agora = model("Agora", agoraSchema);

module.exports = Agora;
