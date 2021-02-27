import * as types from "./mutation-types";
import { documentos } from "../../../constants/documentos";
import axios from "axios";

export const ActionGetGlobalDocumentos = ({ commit }) => {
  commit(types.GET_GLOBAL_DOCUMENTOS, documentos);
};

export const ActionSetDocumento = ({ commit }, payload) => {
  commit(types.SET_DOCUMENTO, payload);
};

export const ActionGetDocumentosApi = async ({ commit }) => {
  const { data } = await axios.get(
    "http://localhost:8080/eprontuario-api/documento"
  );

  commit(types.GET_DOCUMENTOS_API, data.content);
};

export const ActionGetTitulosDocumento = async ({ commit}) => {
  const { data } = await axios.get('http://localhost:8080/eprontuario-api/documento/documentos-registrados');

  let titulosComId = []
  for (let i = 0; i < data.length; i++) {
    titulosComId.push({ id: i, titulo: data[i]})
  }
  commit(types.GET_TITULO_DOCUMENTOS, titulosComId)
}
