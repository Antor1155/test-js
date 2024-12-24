const mongoose = require("mongoose");

var FriendSchema = new mongoose.Schema(
	{
		user1: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",

		},
		user2: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",

		},
	},
	{
		timestamps: true,
	}
);

// Define indexes for the user1 and user2 fields
FriendSchema.index({ user1: 1 });
FriendSchema.index({ user2: 1 });

const Friend = mongoose.model("Friend", FriendSchema);
module.exports = Friend;
