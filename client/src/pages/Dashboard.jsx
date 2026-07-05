import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {
  const [customerCount, setCustomerCount] = useState(0);
  const [complaintCount, setComplaintCount] = useState(0);
  const [openCount, setOpenCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const customerRes = await API.get("/customers");
      const complaintRes = await API.get("/complaints");

      setCustomerCount(customerRes.data.length);
      setComplaintCount(complaintRes.data.length);

      setOpenCount(
        complaintRes.data.filter(c => c.status === "Open").length
      );

      setResolvedCount(
        complaintRes.data.filter(c => c.status === "Resolved").length
      );

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={cardStyle}>
          <h2>{customerCount}</h2>
          <p>Total Customers</p>
        </div>

        <div style={cardStyle}>
          <h2>{complaintCount}</h2>
          <p>Total Complaints</p>
        </div>

        <div style={cardStyle}>
          <h2>{openCount}</h2>
          <p>Open Complaints</p>
        </div>

        <div style={cardStyle}>
          <h2>{resolvedCount}</h2>
          <p>Resolved Complaints</p>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background: "#1976d2",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "220px",
  textAlign: "center",
};

export default Dashboard;