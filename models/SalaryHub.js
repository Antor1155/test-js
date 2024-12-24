const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User" },
    userId: Number,
    agency: {
      type: Types.ObjectId,
    },
    agencyJoinDate: Date,
    host_type: String,
    numberOfBan: {
      type: Number,
      default: 0,
    },
    validDay: {
      type: Number,
      default: 0,
    },
    totalHours: {
      type: Number,
      default: 0,
    },
    gems: {
      type: Number,
      default: 0,
    },
    bonuses: {
      type: Number,
      default: 0,
    },
    usd: {
      type: Number,
      default: 0,
    },
    bonusUsd: {
      type: Number,
      default: 0,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    year: {
      type: Number,
    },
    month: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// adding index to specific fields on acending order 
schema.index({ agency: 1 })
schema.index({ month: 1 })
schema.index({ year: 1 })
schema.index({ createdAt: 1 })

// adding index to specific fields on decending order 
schema.index({ usd: -1 })

// below one shows as suggested by mongodb but field don't exist 
// schema.index({ host_type: -1})

const SalaryHub = model("SalaryHub", schema);

module.exports = SalaryHub;
