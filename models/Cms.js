const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cmsSchema = new mongoose.Schema(
	{
		data: {
			type: Schema.Types.Mixed,
		},
		key: {
			type: String,
			index: true,
			required: true,
			unique: true,
			trim: true,
		},
		is_public: {
			type: Boolean,
			index: true,
			default: false,
		},
	},
	{
		collection: "cms",
		timestamps: true,
	}
);

module.exports = mongoose.model("cms", cmsSchema);
