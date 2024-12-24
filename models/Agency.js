const { Schema, model, Types } = require("mongoose");

const agencySchema = new Schema(
	{
		holder_name: {
			type: String,
			required: [true, "Holder Name is required"],
		},
		agency_name: {
			type: String,
			required: [true, "Agency Name is required"],
			unique: true,
		},
		address: {
			present_address: {
				type: String,
				required: [true, "Present address is required"],
			},
			permanent_address: {
				type: String,
				required: [true, "Permanent address is required"],
			},
			country: { type: String, required: [true, "Country is required"] },
		},
		password: {
			type: String,
			select: false,
		},
		user_id: {
			type: String,
		},
		nid: {
			type: Array,
			required: [true, "Document in required"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		phone: { type: String, required: [true, "Phone number is required"] },
		social_media_link: {
			type: String,
			required: [true, "Social media link is required"],
		},
		reference_by: {
			type: String,
			required: [true, "Reference Name is required"],
		},
		agency_type: {
			type: String,
			default: "Free",
			enum: ["Paid", "Free"],
		},
		status: {
			type: String,
			default: "inactive",
			enum: ["active", "inactive", "blocked"],
		},
		admin: {
			type: Types.ObjectId,
			ref: "AgencyAdmin",
		},
		avatar: String,
	},
	{
		timestamps: true,
	}
);

const Agency = model("Agency", agencySchema);

module.exports = Agency;
