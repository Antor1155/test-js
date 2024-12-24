const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
		},
		userAgent: {
			type: String,
			required: true,
		},
		ip: String,
		// sessionStartLocation: {
		// 	type: {
		// 		type: String,
		// 		enum: ["Point"],
		// 		required: true,
		// 		default: "Point",
		// 	},
		// 	coordinates: {
		// 		type: [Number],
		// 		required: true,
		// 	},
		// },
		// lastActivityLocation: {
		// 	type: {
		// 		type: String,
		// 		enum: ["Point"],
		// 		required: true,
		// 		default: "Point",
		// 	},
		// 	coordinates: {
		// 		type: [Number],
		// 		required: true,
		// 	},
		// },
	},
	{
		timestamps: true,
	}
);

const Session = model("Session", schema);

module.exports = Session;
