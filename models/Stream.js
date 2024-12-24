const { Schema, model, Types } = require("mongoose");

const streamSchema = new Schema(
	{
		appId: String,
		channel_name: String,
		mode: {
			type: String,
			enum: ["live", "voice_party", "video_party", "pk"],
			default: "live",

		},
		pkStartedAt: {
			type: Date,
		},
		punishmentStartedAt: {
			type: Date,
		},
		pkDuration: {
			type: Number,
			enum: [1, 2, 5, 10, 15],
			default: 15,
		},
		access: {
			type: String,
			enum: ["open", "close"],
			default: "close",
		},
		host: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: false,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",

			},
			diamonds: {
				type: Number,
				default: 0,
			},
			pkDiamonds: {
				type: Number,
				default: 0,
			},
			pkWinState: {
				type: String,
				default: "",
			},
		},
		pk: {
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
			stream: {
				type: Types.ObjectId,
				ref: "Stream",
			},
			diamonds: {
				type: Number,
				default: 0,
			},
			pkDiamonds: {
				type: Number,
				default: 0,
			},
			pkWinState: {
				type: String,
				default: "",
			},
		},
		spacial_chair: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
			reserved: {
				type: Boolean,
				default: false,
			},
		},
		chair_one: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
			diamonds: {
				type: Number,
				default: 0,
			},
			pkWinState: {
				type: String,
				default: "",
			},
		},
		chair_two: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_three: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_four: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_five: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_six: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_seven: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_eight: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_nine: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_ten: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_eleven: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_twelve: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_thirteen: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_fourteen: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		chair_fifteen: {
			mic_muted: {
				type: Boolean,
				default: true,
			},
			reserved: {
				type: Boolean,
				default: false,
			},
			mic_muted_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			camera_off: {
				type: Boolean,
				default: true,
			},
			camera_off_by: {
				type: String,
				enum: ["self", "host"],
				default: "self",
			},
			user: {
				type: Types.ObjectId,
				ref: "User",
			},
		},
		totalAudience: {
			type: Number,
			default: 0,
		},
		audience: [
			{
				type: Types.ObjectId,
				ref: "User",
			},
		],
		join_requests: [
			{
				type: Types.ObjectId,
				ref: "User",
			},
		],
		deletedAt: {
			type: Date,
			select: false,
		},
		lastPing: {
			type: Date,
			select: false,
			default: Date.now,
		},
		agency: {
			type: Types.ObjectId,
			ref: "Agency",
			select: false,
			select: false,
		},
		roomBackground: {
			type: String,
			default: "https://heartlive.s3.ap-south-1.amazonaws.com/files/bg-1680115214133.png",
		},
		admins: [
			{
				type: Types.ObjectId,
				ref: "User",
			},
		],
		chat_mute: [
			{
				type: Types.ObjectId,
				ref: "User",
			},
		],
		countryCode: String,
		notice: String,
	},
	{
		timestamps: true,
	}
);

// Add index on specific field
streamSchema.index({ createdAt: 1 });
streamSchema.index({ deletedAt: 1 });
streamSchema.index({ mode: 1 });

const Stream = model("Stream", streamSchema);

module.exports = Stream;
