const Complaint = require("../models/Complaints");

// Create Complaint
const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Complaints
const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Complaint
const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Complaint
const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: "Complaint Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createComplaint,
  getComplaints,
  updateComplaint,
  deleteComplaint,
};