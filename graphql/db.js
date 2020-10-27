import axios from "axios";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
  return axios
    .get(API_URL, {
      params: {
        limit,
        minimum_rating: rating,
      },
    })
    .then((res) => res.data.data.movies);
};

export const getMovie = (id) => {
  return axios
    .get("https://yts.mx/api/v2/movie_details.json", {
      params: {
        movie_id: id,
      },
    })
    .then((res) => res.data.data.movie);
};
