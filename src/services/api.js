// src/services/api.js
import axios from "axios";

const HOST = "https://edimossilva-task-manager.herokuapp.com/auth/login";

export const doLoginApi = (username, password) => {
  const params = { username, password };

  return axios.post(HOST, params);
};
