const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "FeedPost",

    },
    comment: {
      type: String,
      required: true,
    },
    likes: {
      type: Schema.Types.ObjectId,
      ref: "FeedCommentLike",
    },
  },
  {
    timestamps: true,
  }
);

// Add index on specific field
commentSchema.index({ post: 1 });

const FeedComment = model("FeedComment", commentSchema);

module.exports = FeedComment;
