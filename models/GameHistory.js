const { Schema, model } = require("mongoose");

const gameHistorySchema = new Schema(
  {
    gameName: {
      type: String,
      enum: [
        "TEEN_PATTI",
        "LUCKY_77",
        "FERRIS_WHEEL",
        "ROULETTE",
        "FRUIT_LOOPS",
      ],
      required: true,
    },
    winPot: {
      type: String,
      enum: [
        "apple",
        "pineapple",
        "orange",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "BCDE",
        "FGHA",
        0,
        32,
        15,
        19,
        4,
        21,
        2,
        25,
        17,
        34,
        6,
        27,
        13,
        36,
        11,
        30,
        8,
        23,
        10,
        5,
        24,
        16,
        33,
        1,
        20,
        14,
        31,
        9,
        22,
        18,
        29,
        7,
        28,
        12,
        35,
        3,
        26,
      ],
      required: true,
    },
    roundNumber: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const GameHistory = model("GameHistory", gameHistorySchema);

module.exports = GameHistory;
