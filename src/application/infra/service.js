import axios from "axios";

class Service {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/eprontuario-api",
    });
  }
}
export default Service;
