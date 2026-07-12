import axios from "axios";

const API = axios.create({
    baseURL: "https://customer-registry-lw1u.onrender.com/api"
});

export default API;