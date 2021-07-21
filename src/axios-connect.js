import axios from "axios";

const instance = axios.create({
  baseURL: "eazybe.com/api/vi/whatzapp/",
});

export default instance;
