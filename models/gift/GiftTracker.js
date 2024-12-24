const { Schema, model, Types } = require("mongoose");

const giftTrackerSchema = new Schema(
	{
		gift: {
			type: Types.ObjectId,
			ref: "Gift",

		},
		sender: {
			type: Types.ObjectId,
			ref: "User",

		},
		receiver: {
			type: Types.ObjectId,
			ref: "User",

		},
		beans: {
			type: Number,
			default: 0,

		},
		quantity: {
			type: Number,
			default: 1,
		},
		stream: {
			type: Types.ObjectId,
			ref: "Stream",
			select: false,
		},
		fromBackpack: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

// Add index on createdAt field
giftTrackerSchema.index({ createdAt: 1 });
giftTrackerSchema.index({ sender: 1 });
giftTrackerSchema.index({ receiver: 1 });
giftTrackerSchema.index({ beans: 1 });
giftTrackerSchema.index({ gift: 1 });

const GiftTracker = model("GiftTracker", giftTrackerSchema);

module.exports = GiftTracker;
