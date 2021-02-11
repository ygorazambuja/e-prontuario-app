import * as types from "./mutation-types";
import axios from "axios";

export const ActionGetPacientes = async ({ commit }) => {
  axios
    .get("http://localhost:8080/eprontuario-api/paciente", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgRS1QUk9OVFVBUklPIFVGTVMiLCJzdWIiOiIxIiwiaWF0IjoxNjEyODMwMjE5LCJleHAiOjE2MTI4MzIwMTl9.qkbtPw1lv96Jxozai603hHnIJ7i1ZGyXdqPr9P2aRns"
      }
    })
    .then(data => {
      commit(types.GET_PACIENTES, data);
    })
    .catch(err => console.log(err));
};

export const ActionAddPaciente = async ({ commit }, payload) => {
  await axios.post(
    "http://localhost:8080/eprontuario-api/paciente",
    { ...payload },
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgRS1QUk9OVFVBUklPIFVGTVMiLCJzdWIiOiIxIiwiaWF0IjoxNjEyODM0NDg3LCJleHAiOjE2MTI5MjA4ODd9.sZnuTXQ9-qNP38A0YCA73cEqwTXSvHj4kdAuqme-gpI"
      }
    }
  );
  axios
    .get("http://localhost:8080/eprontuario-api/paciente", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgRS1QUk9OVFVBUklPIFVGTVMiLCJzdWIiOiIxIiwiaWF0IjoxNjEyODM0NDg3LCJleHAiOjE2MTI5MjA4ODd9.sZnuTXQ9-qNP38A0YCA73cEqwTXSvHj4kdAuqme-gpI"
      }
    })
    .then(data => {
      commit(types.ADD_PACIENTE, payload);
      commit(types.GET_PACIENTES, data.data.content);
    })
    .catch(err => console.log(err));
};
