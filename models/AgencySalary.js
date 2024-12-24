const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    agency: {
      type: Types.ObjectId,
      ref: "Agency",
    },
    agencyAdmin: {
      type: Types.ObjectId,
      ref: "AgencyAdmin",
    },
    totalGemsReceived: {
      type: Number,
      default: 0,
    },
    totalHost: {
      type: Number,
      default: 0,
    },
    totalActiveHost: {
      type: Number,
      default: 0,
    },
    hostSalaryInUsd: {
      type: Number,
      default: 0,
    },
    agencyShareInUsd: {
      type: Number,
      default: 0,
    },
    bonusInUsd: {
      type: Number,
      default: 0,
    },
    totalPayableSalaryInUsd: {
      type: Number,
      default: 0,
    },
    country: {
      type: String,
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

const AgencySalary = model("AgencySalary", schema);

module.exports = AgencySalary;
