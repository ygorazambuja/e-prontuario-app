import * as types from "./mutation-types";
import axios from "axios";

export const ActionGetPacientes = async ({ commit }) => {
  axios
    .get("http://localhost:8080/eprontuario-api/paciente")
    .then(data => {
      commit(types.GET_PACIENTES, data);
    })
    .catch(err => console.log(err));
};

export const ActionAddPaciente = async ({ commit }, payload) => {
  const { data } = await axios.post(
    "http://localhost:8080/eprontuario-api/paciente",
    {
      ...payload
    }
  );
  commit(types.ADD_PACIENTE, data);
};
