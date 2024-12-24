const { Schema, model, Types } = require("mongoose");

const beanAdminSchema = new Schema(
	{
		name: String,
		unique_id: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
			select: false,
		},
		beans: {
			type: Number,
			default: 0,
		},
		active: {
			type: Boolean,
			default: false,
		},
		lockedBy: {
			type: String,
			enum: ["parent", "mother"],
		},
		parent: {
			type: Types.ObjectId,
			ref: "BeanAdmin",
		},
		deletedAt: {
			type: Date,
		},
		country: String,
	},
	{
		timestamps: true,
	}
);

const BeanAdmin = model("BeanAdmin", beanAdminSchema);

module.exports = BeanAdmin;
