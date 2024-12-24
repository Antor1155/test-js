const mongoose = require("mongoose");

var FollowSchema = new mongoose.Schema(
	{
		follower: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",

		},
		following: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",

		},
	},
	{
		timestamps: true,
	}
);

// Define indexes for the follower and following fields
FollowSchema.index({ follower: 1 });
FollowSchema.index({ following: 1 });

const Follow = mongoose.model("Follow", FollowSchema);

module.exports = Follow;
