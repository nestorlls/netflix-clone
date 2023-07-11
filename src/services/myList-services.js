import axios from 'axios';
import { NETFLIX_URL_API } from '../utils/constanst';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getMyList = createAsyncThunk('netflix/getMyList', async (email) => {
  const url = `${NETFLIX_URL_API}/api/user/mylist/${email}`;
  const { data } = await axios.get(url);
  return data.movies;
});

const removeMovieFromMyList = createAsyncThunk(
  'netflix/removeMovieFromMyList',
  async ({ email, movieId }) => {
    const url = `${NETFLIX_URL_API}/api/user/remove`;
    const { data } = await axios.put(url, { email, movieId });
    console.log(data.movies);
    return data.movies;
  }
);

export { getMyList, removeMovieFromMyList };
