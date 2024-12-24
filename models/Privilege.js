const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		status: {
			type: String,
			default: "inactive",
			enum: ["active", "inactive", "blocked"],
		},
		admin: {
			type: Types.ObjectId,
		},
	},
	{
		timestamps: true,
	}
);

const Privilege = model("Privilege", schema);

module.exports = Privilege;
