import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "api/v1/cervecerias"
    : "http://localhost:4000/api/v1/cervecerias";

export default axios.create({
  baseURL,
});
