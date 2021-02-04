import * as types from "./mutation-types";

export default {
  [types.SET_GLOBAL_USER](state, payload) {
    state.token = payload.authToken;
    state.usuario = payload.usuario;
  },
  [types.GET_GLOBAL_USER]() {},
  [types.DELETE_GLOBAL_USER](state) {
    state.token = "";
    state.usuario = {};
  }
};
