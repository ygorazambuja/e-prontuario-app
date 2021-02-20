import axios from "axios";
// import store from "../../modules/login/store/state";
class Service {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:8080/eprontuario-api"
    });
  }
}
export default Service;

// axios.interceptors.request.use(
//   function(config) {
//     const token = store.getters.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function(err) {
//     return Promise.reject(err);
//   }
// );
