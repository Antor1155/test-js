const { Schema, model } = require("mongoose");

const likeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",

    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "FeedPost",

    },
  },
  {
    timestamps: true,
  }
);

// Add index on specific field
likeSchema.index({ user: 1 });
likeSchema.index({ post: 1 });

const FeedLike = model("FeedLike", likeSchema);

module.exports = FeedLike;
