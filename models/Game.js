const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      enum: [
        "TEEN_PATTI",
        "LUCKY_77",
        "FERRIS_WHEEL",
        "ROULETTE",
        "FRUIT_LOOPS",
        "ROYAL_BATTLE",
      ],
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    userId: { type: Number },
    transactionType: {
      type: String,
      enum: ["expense", "earning"],
    },
    beans: { type: Number, required: true },
    roundNumber: {
      type: Number,
    },
    board: { type: String },
    balanceAfterBet: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Game = model("Game", schema);

module.exports = Game;
