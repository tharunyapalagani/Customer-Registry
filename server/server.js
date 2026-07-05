const express = require("express");
const mongoose = require("mongoose");

const customerRoutes = require("./routes/customerRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("Customer Registry Backend Running");
});

const PORT = process.env.PORT || 5000;

app.use("/api/customers", customerRoutes);
app.use("/api/complaints", complaintRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});