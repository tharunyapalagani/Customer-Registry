const Customer = require("../models/Customer");

// Create Customer
const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Customer By ID
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Customer
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Customer Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};