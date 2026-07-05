import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function ViewCustomers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await API.get("/customers");
      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = async (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      try {
        await API.delete(`/customers/${id}`);
        fetchCustomers();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={{ width: "90%", margin: "30px auto" }}>
      <h2>Customer List</h2>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>
                <Link to={`/edit/${customer._id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => deleteCustomer(customer._id)}
                  style={{ marginLeft: "10px" }}
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

export default ViewCustomers;