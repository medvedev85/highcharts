import * as axios from "axios";

const instanse = axios.create({ //заголовок Access-Control-Allow-Origin на сервере
  baseURL: "https://frfry.com/gpu_benchmark/",
  withCredentials: true
});

export const useAPI = {
  getDataJSON: (page) => {
    return instanse
      .get(`gpu_results/${page}`)
      .then(response => {
        return response.data;
      });
  }
}
