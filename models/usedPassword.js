const mongoose = require("mongoose");

const usedPasswordSchema = new mongoose.Schema(
	{
		hashed_password: {
			type: String,
			required: true,
			index: true,
		},
	},
	{
		timestamps: true,
		collection: "usedpassword",
	}
);

module.exports = mongoose.model("usedpassword", usedPasswordSchema);
