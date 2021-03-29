import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.params = { api_key: "ccb2e026c3296b8bbba04e490040240a" };

async function fetchMoviesCommon(url = "", config = {}) {
  try {
    const response = await axios(url, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesCommon("trending/all/day");
}

export function fetchMovieById(movieId) {
  return fetchMoviesCommon(`movie/${movieId}`);
}

export function fetchMovieOnSubmit(query) {
  return fetchMoviesCommon(`/search/movie?query=${query}`);
}

export function fetchMovieCastInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/credits`);
}

export function fetchMovieReviewsInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/reviews`);
}
