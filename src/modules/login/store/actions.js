import * as types from "./mutation-types";
import { doSiscadLogin } from "../../../utils/siscad";

export const ActionSetGlobalUser = async ({ commit }, payload) => {
  const response = await doSiscadLogin(payload.passaporte, payload.senha);
  commit(types.SET_GLOBAL_USER, response);
};


export const ActionDeleteGlobalUser = ({ commit }) => {
  commit(types.DELETE_GLOBAL_USER);
};
