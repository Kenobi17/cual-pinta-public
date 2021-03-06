import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/authentication"
    : "http://localhost:4000/authentication";

export default axios.create({
  baseURL,
});
