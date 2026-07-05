import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddComplaint() {
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    customerName: "",
    issueTitle: "",
    description: "",
    priority: "Low",
    status: "Open",
  });

  const handleChange = (e) => {
    setComplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/complaints", complaint);
      alert("Complaint Added Successfully");
      navigate("/complaints");
    } catch (error) {
      console.log(error);
      alert("Error adding complaint");
    }
  };

  return (
    <div style={{ width: "450px", margin: "30px auto" }}>
      <h2>Add Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={complaint.customerName}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="issueTitle"
          placeholder="Issue Title"
          value={complaint.issueTitle}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={complaint.description}
          onChange={handleChange}
          required
        />

        <br /><br />

        <select
          name="priority"
          value={complaint.priority}
          onChange={handleChange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br /><br />

        <select
          name="status"
          value={complaint.status}
          onChange={handleChange}
        >
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <br /><br />

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
}

export default AddComplaint;