import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8978731d3453660c119868bf0fe3e32f';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-EN' };

export async function fetchTrandingMovie(page = 1) {
  try {
    const {
      data: { total_pages, results },
    } = await axios.get(`/trending/movie/day?page=${page}`);
    return [results, total_pages];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchMovie(query, page = 1) {
  try {
    const {
      data: { total_pages, results },
    } = await axios.get(`/search/movie?query=${query}&page=${page}`);
    return [results, total_pages];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchMovieCredits(movieId) {
  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits`);
    return cast;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews`);

    return results;
  } catch (error) {
    console.log(error);
    return [];
  }
}
