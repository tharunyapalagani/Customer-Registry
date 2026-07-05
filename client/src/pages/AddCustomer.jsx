import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddCustomer() {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/customers", customer);
      alert("Customer Added Successfully!");
      navigate("/customers");
    } catch (error) {
      console.log(error);
      alert("Failed to add customer");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Add Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={customer.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="address"
          placeholder="Enter Address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Save Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;