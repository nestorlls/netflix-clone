import axios from 'axios';
import { API_KEY, TMBD_BASE_URL } from '../utils/constanst';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRawData = async (url, genres) => {
  const MovieArray = [];
  for (let page = 1; page <= 5; page++) {
    const { data } = await axios.get(`${url}&page=${page}`);
    const movies = await data.results;
    createArrayFromRawData(movies, MovieArray, genres);
  }
  return MovieArray;
};

const createArrayFromRawData = (movies, MovieArray, genres) => {
  for (const movie of movies) {
    const movieGenres = [];
    for (const id of movie.genre_ids) {
      const nameGenre = genres.find((genre) => genre.id === id);

      if (nameGenre) {
        movieGenres.push(nameGenre.name);
      }
    }

    if (movie.backdrop_path) {
      MovieArray.push({
        id: movie.id,
        name: movie?.original_name || movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
    }
  }
};

const apifetchData = createAsyncThunk(
  'netflix/data',
  async ({ type }, thunkApi) => {
    const { netflix } = thunkApi.getState();
    const genres = netflix.genres;

    const url = `${TMBD_BASE_URL}/trending/${type}/week?api_key=${API_KEY}&page=3`;

    const data = await getRawData(url, genres);
    return data;
  }
);

const apiFetchGenres = createAsyncThunk('netflix/genres', async () => {
  const url = `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.genres;
});

const apiFetchMovieByGenre = createAsyncThunk(
  'netflix/byGenre',
  async ({ type, genre }, thunkApi) => {
    const { netflix } = thunkApi.getState();
    const genres = netflix.genres;

    const url = `${TMBD_BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${genre}`;

    const data = await getRawData(url, genres);

    return data;
  }
);

const searchMovies = createAsyncThunk(
  'netflix/search',
  async ({ type, query }, thunkApi) => {
    const { netflix } = thunkApi.getState();
    const genres = netflix.genres;

    const url = `${TMBD_BASE_URL}/search/${type}?api_key=${API_KEY}&language=en-US&query=${query}`;
    const data = await getRawData(url, genres);
    return data;
  }
);

const getInfoMovie = createAsyncThunk('netflix/info', async ({ type, id }) => {
  const url = `${TMBD_BASE_URL}/${type}/${id}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);

  console.log(data);

  const info = {
    movieId: data.id,
    name: data.original_title || data.original_name,
    title: data.title,
    tagline: data.tagline,
    genres: data.genres.map((genre) => genre.name),
    image: data.backdrop_path,
    overview: data.overview,
    vote_rating: data.vote_average,
    vote_count: data.vote_count,
  };

  return info;
});

export {
  apifetchData,
  apiFetchGenres,
  apiFetchMovieByGenre,
  searchMovies,
  getInfoMovie,
};
