import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function ViewComplaints() {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const response = await API.get("/complaints");
      setComplaints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const deleteComplaint = async (id) => {
    try {
      await API.delete(`/complaints/${id}`);
      alert("Complaint Deleted Successfully");
      fetchComplaints();
    } catch (error) {
      console.log(error);
      alert("Error deleting complaint");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>View Complaints</h1>

      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Customer</th>
            <th>Issue</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((item) => (
            <tr key={item._id}>
              <td>{item.customerName}</td>
              <td>{item.issueTitle}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>{item.status}</td>

              <td>
                <Link to={`/edit-complaint/${item._id}`}>
                  <button
                    style={{
                      background: "blue",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </td>

              <td>
                <button
                  onClick={() => deleteComplaint(item._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewComplaints;