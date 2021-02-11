import * as types from "./mutation-types";

export default {
  [types.GET_PACIENTES](state, payload) {
    state.pacientes = payload;
  },
  [types.ADD_PACIENTE](state, payload) {
    state.pacientes = payload
  }
};
