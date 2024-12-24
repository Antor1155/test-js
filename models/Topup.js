const { Schema, model } = require("mongoose");
const { STATUS } = require("../enums/topup");

const topupSchema = new Schema(
	{
		internalTransaction: {
			type: Boolean,
			default: false,

		},
		user: {
			type: Schema.Types.ObjectId,
			refPath: "userType",

		},
		userType: {
			type: String,
			enum: ["User", "BeanAdmin"],
			default: "User",

		},
		internal: {
			type: Boolean,
			default: false,

		},
		amount: {
			type: Number,
			required: true,
		},
		sender: {
			type: Schema.Types.ObjectId,
			ref: "BeanAdmin",
		},
		purchaseToken: String,
		sku: String,
		status: {
			type: String,
			enum: Object.values(STATUS),

		},
		previousBeans: {
			type: Number,
		},
		previousSenderBeans: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
);


// adding index to schema for query optimization 
topupSchema.index({ createdAt: 1 });
topupSchema.index({ status: 1 });
topupSchema.index({ internalTransaction: 1 });
topupSchema.index({ internal: 1 });
topupSchema.index({ userType: 1 });
topupSchema.index({ user: 1 });

const Topup = model("Topup", topupSchema);

module.exports = Topup;
