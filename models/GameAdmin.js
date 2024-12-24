const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    hash: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const GameAdmin = model("GameAdmin", schema);

module.exports = GameAdmin;
