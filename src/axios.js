import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-538a6/us-central1/api", // the api (cloud fonction url)
});
export default instance;
