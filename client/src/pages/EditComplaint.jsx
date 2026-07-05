import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function EditComplaint() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    customerName: "",
    issueTitle: "",
    description: "",
    priority: "",
    status: "",
  });

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {
    try {
      const response = await API.get(`/complaints/${id}`);
      setComplaint(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setComplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/complaints/${id}`, complaint);
      alert("Complaint Updated Successfully");
      navigate("/view-complaints");
    } catch (error) {
      console.log(error);
      alert("Error Updating Complaint");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Complaint</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={complaint.customerName}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="issueTitle"
          placeholder="Issue Title"
          value={complaint.issueTitle}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={complaint.description}
          onChange={handleChange}
        />
        <br /><br />

        <select
          name="priority"
          value={complaint.priority}
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br /><br />

        <select
          name="status"
          value={complaint.status}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <br /><br />

        <button type="submit">Update Complaint</button>
      </form>
    </div>
  );
}

export default EditComplaint;