const { Schema, model } = require("mongoose");

const schema = new Schema(
	{
		avatar: {
			type: String,
			default: "https://heartlive.s3.ap-south-1.amazonaws.com/files/avatar-1676660070916.png",
		},
		name: String,
		email: {
			type: String,
			unique: true,
			required: true,
		},
		hash: {
			type: String,
			required: true,
			select: false,
		},
		privileges: [String],
		countryAccess: {
			type: String,
			default: "all",
		},
	},
	{
		timestamps: true,
	}
);

const SuperAdmin = model("SuperAdmin", schema);

module.exports = SuperAdmin;
