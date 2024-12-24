const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
	{
		avatar: {
			type: String,
			default:
				"https://heartlive.s3.ap-south-1.amazonaws.com/files/avatar-1676660070916.png",
		},
		nickname: {
			type: String,
			default: "N/A",
		},
		userId: {
			type: Number,
			require: true,
			unique: true,
			index: true,
		},
		socketId: {
			type: String,
		},
		gender: {
			type: String,
			enum: ["Male", "Female"],
		},
		region: {
			type: String,
		},
		dateOfBirth: {
			type: Date,
		},
		introduction: {
			type: String,
		},
		loginMethod: {
			type: String,
			enum: ["phone", "google", "facebook"],
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		emailVerified: {
			type: Boolean,
			default: false,
			select: false,
		},
		phoneVerified: {
			type: Boolean,
			default: false,
			select: false,
		},
		FCMToken: {
			type: String,
			select: false,
		},
		notificationTurn: {
			type: Boolean,
			default: true,
		},
		experience: {
			type: Number,
			default: 0,
		},
		level: {
			type: Number,
			default: 1,
		},
		gems: {
			type: Number,
			default: 0,
		},
		beans: {
			type: Number,
			default: 0,
		},
		totalReceive: {
			type: Number,
			default: 0,
		},
		agency: {
			type: Types.ObjectId,
			ref: "Agency",
		},
		fake: {
			type: Boolean,
			default: false,
		},
		whoCanSendMessage: {
			// possible value => 'all_user', 'only_followed_by', 'minimum level'
			type: Object,
			default: "all_user",
			select: false,
		},
		host_type: {
			type: String,
			enum: ["audio", "video"],
		},
		agencyJoinDate: {
			type: Date,
		},
		vip: {
			type: String,
			enum: ["bronze-vip", "silver-vip", "golden-vip"],
		},
		frameCodeName: String,
		rideCodeName: String,
		isOfficial: {
			type: Boolean,
			default: false,
		},
		lastStream: {
			type: Types.ObjectId,
			ref: "Stream",
		},
		lastStreamEndAt: {
			type: Date,
		},
		gemsExchangePin: {
			type: String,
			select: false,
		},
		deviceId: {
			type: String,
		},
		hash: {
			type: String,
		},
		currentStreamId: {
			type: Types.ObjectId,
			ref: "Stream",
		},
		fbId: {
			type: String,
		},
		isHostBan: {
			type: Boolean,
			default: false,
		},
		giftSendingDisabled: {
			type: Boolean,
			default: false,
		},
		newPolicy: {
			type: Boolean,
			default: false,
		},
		hasFifteenChair: {
			type: Boolean,
			default: false,
		},
		allowScreenShot: {
			type: Boolean,
			default: false,
		},
		bKashNumber: String,
		nagadNumber: String,
		binanceEmail: String,
		entryCard: String,
		bubble: String,
		receivingLevelImage: String,

		specialUser: {
			type: Boolean,
			default: false,
		},
		is_bot: {
			type: Boolean,
			default: false,
		},
		is_active: {
			type: Boolean,
			default: true,
		},
		max_gift: {
			type: Number,
			default: 0,
		},
		min_gift: {
			type: Number,
			default: 0,
		},
		max_bet: {
			type: Number,
			default: 0,
		},
		min_bet: {
			type: Number,
			default: 0,
		},
		is_system: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

// Add index on specific field
userSchema.index({ userId: 1 });
userSchema.index({ region: 1 });
userSchema.index({ host_type: 1 });
userSchema.index({ fake: 1 });
userSchema.index({ agency: 1 });
userSchema.index({ beans: 1 });
userSchema.index({ gems: 1 });
userSchema.index({ updatedAt: 1 });

const User = model("User", userSchema);

module.exports = User;
