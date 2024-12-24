const { Schema, model, Types } = require("mongoose");
const { STATUS } = require("../enums/topup");

const schema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",

		},
		gems: {
			type: Number,
			required: true,
		},
		beans: {
			type: Number,
			required: true,
		},
		agency: {
			type: Types.ObjectId,
			ref: "Agency",
		},
		status: {
			type: String,
			enum: Object.values(STATUS),
		},
	},
	{
		timestamps: true,
	}
);

// Add index on specific field
schema.index({ createdAt: 1 });
schema.index({ user: 1 });
schema.index({ agency: 1 });
schema.index({ status: 1 });

const Exchange = model("Exchange", schema);

module.exports = Exchange;
