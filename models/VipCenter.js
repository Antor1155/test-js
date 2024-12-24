const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		vipLogo: {
			type: String,
			required: true,
		},
		privileges: [
			{
				type: {
					type: String,
					enum: [
						"frame",
						"ride",
						"entryCard",
						"badge",
						"token",
						"sticker",
						"bubble",
						"top_board",
						"kick_out",
						"mute",
					],
					required: true,
				},
				label: { type: String, required: true },
				icon: { type: String, required: true },
				product: { type: Types.ObjectId, ref: "Product" },
			},
		],
		price: { type: Number, required: true },
		duration: { type: String, required: true },
		active: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

const VipCenter = model("VipCenter", schema);
module.exports = VipCenter;
