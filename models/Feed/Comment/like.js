const { Schema, model } = require("mongoose");

const likeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "FeedComment",
    },
  },
  {
    timestamps: true,
  }
);

const FeedCommentLike = model("FeedCommentLike", likeSchema);

module.exports = FeedCommentLike;
