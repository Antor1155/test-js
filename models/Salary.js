const { Schema, model, Types } = require("mongoose");

const salarySchema = new Schema(
	{
		agency: {
			type: Types.ObjectId,
			ref: "Agency",
			required: true,
		},
		userId: {
			type: Number,
		},
		gems: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Salary = model("Salary", salarySchema, "sellery_23_may");

module.exports = Salary;
