import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "e354965c26064379931cce6a8a0605c2",
    language: "es",
  },
});
