import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCustomer";
import ViewCustomers from "./pages/ViewCustomers";
import EditCustomer from "./pages/EditCustomer";
import Dashboard from "./pages/Dashboard";
import AddComplaint from "./pages/AddComplaint";
import ViewComplaints from "./pages/ViewComplaints";
import EditComplaint from "./pages/EditComplaint";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCustomer />} />
        <Route path="/customers" element={<ViewCustomers />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-complaint" element={<AddComplaint />} />
        <Route path="/complaints" element={<ViewComplaints />} />
        <Route path="/edit-complaint/:id" element={<EditComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;