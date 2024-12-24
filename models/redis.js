const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const redisSchema = new Schema(
	{
		key: {
			type: String,
			required: true,
			index: true,
			unique: true,
		},
		value: {
			type: Schema.Types.Mixed,
			required: true,
		},
		expireAt: {
			type: Date,
			required: true,
			index: true,
		},
	},
	{
		collection: "redis",
		timestamps: true,
	}
);

const redis = mongoose.model("redis", redisSchema);

module.exports = redis;
