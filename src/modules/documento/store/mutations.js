import * as types from "./mutation-types";

export default {
  [types.GET_GLOBAL_DOCUMENTOS](state, payload) {
    state.documentos = payload;
  },
  [types.SET_DOCUMENTO](state, payload) {
    state.documentoSelecionado = payload;
  }
};
