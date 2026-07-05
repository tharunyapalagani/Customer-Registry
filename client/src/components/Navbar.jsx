import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1976d2",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Customer Registry</h2>

      <div>
        <Link
          to="/"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link
          to="/customers"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Customers
        </Link>

        <Link
          to="/add"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Add Customer
        </Link>

        <Link
          to="/dashboard"
          style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
        >
          Dashboard
        </Link>

        <Link
  to="/add-complaint"
  style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
>
  Add Complaint
</Link>

<Link
  to="/complaints"
  style={{ color: "white", textDecoration: "none" }}
>
  Complaints
</Link>

      </div>
    </nav>
  );
}

export default Navbar;