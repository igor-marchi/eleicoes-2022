import axios from "axios";

export const apiTSE = axios.create({
  baseURL: "https://resultados.tse.jus.br",
});
