const express = require("express");

const {
  createComplaint,
  getComplaints,
  updateComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

router.post("/", createComplaint);
router.get("/", getComplaints);
router.put("/:id", updateComplaint);
router.delete("/:id", deleteComplaint);

module.exports = router;