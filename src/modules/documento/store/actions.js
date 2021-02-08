import * as types from "./mutation-types";
import { documentos } from "../../../constants/documentos";

export const ActionGetGlobalDocumentos = ({ commit }) => {
  commit(types.GET_GLOBAL_DOCUMENTOS, documentos);
};

export const ActionSetDocumento = ({ commit }, payload) => {
  commit(types.SET_DOCUMENTO, payload);
};
