import * as types from "./mutation-types";
import { doLogin } from "../services/doLogin";

export const ActionSetGlobalUser = async ({ commit }, payload) => {
  const { token } = await doLogin({
    login: payload.passaporte,
    senha: payload.senha
  });

  commit(types.SET_GLOBAL_USER, token);
};

export const ActionDeleteGlobalUser = ({ commit }) => {
  commit(types.DELETE_GLOBAL_USER);
};
