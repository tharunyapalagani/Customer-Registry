const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    issueTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);