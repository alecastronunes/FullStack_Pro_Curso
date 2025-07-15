import axios from "axios";

// Base da API: https://api.themoviedb.org/3/
// URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=d1935d4ecbfde00c6313ff29ddc738bf&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
