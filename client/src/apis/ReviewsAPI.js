import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/reviews"
    : "http://localhost:4000/api/v1/reviews";

export default axios.create({
  baseURL,
});
