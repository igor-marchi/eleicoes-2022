import axios from "axios";

export const apiTSE = axios.create({
  baseURL:
    "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json",
});
