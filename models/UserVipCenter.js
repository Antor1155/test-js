const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		user: {
			type: Types.ObjectId,
			ref: "User",
		},
		vipCenter: {
			type: Types.ObjectId,
			ref: "VipCenter",
		},
		expireDate: {
			type: Date,
			required: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

const UserVipCenter = model("UserVipCenter", schema);

module.exports = UserVipCenter;
