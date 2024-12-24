const { Schema, model } = require("mongoose");

const postSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",

		},
		caption: {
			type: String,
			required: true,
		},
		contentUrl: [
			{
				url: {
					type: String,
					required: true,
				},
				thumbnail: String,
			},
		],
		numberOfLikes: {
			type: Number,
			default: 0,
		},
		numberOfComments: {
			type: Number,
			default: 0,
		},
		likes: {
			type: Schema.Types.ObjectId,
			ref: "FeedLike",
		},
		comments: {
			type: Schema.Types.ObjectId,
			ref: "FeedComment",
		},
		reports: {
			type: Schema.Types.ObjectId,
			ref: "Report",
		},
	},
	{
		timestamps: true,
	}
);

// Define indexes for the specific fields
postSchema.index({ user: 1, });

const FeedPost = model("FeedPost", postSchema);

module.exports = FeedPost;
