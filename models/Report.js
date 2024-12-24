const { Schema, model } = require("mongoose");
const { VIOLATIONS, RESOURCE_TYPE } = require("../enums/report");

const reportSchema = new Schema(
	{
		reporter: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		resource: {
			type: Schema.Types.ObjectId,
		},
		resourceType: {
			type: String,
			enum: Object.values(RESOURCE_TYPE),
		},
		violation: {
			type: String,
			enum: Object.values(VIOLATIONS),
		},
		message: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Report = model("Report", reportSchema);

module.exports = Report;
