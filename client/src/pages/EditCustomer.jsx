import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await API.get(`/customers/${id}`);
      setCustomer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/customers/${id}`, customer);
      alert("Customer Updated Successfully");
      navigate("/customers");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Edit Customer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default EditCustomer;