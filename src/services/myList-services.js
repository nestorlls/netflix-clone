import axios from 'axios';
import { NETFLIX_URL_API } from '../utils/constanst';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getMyList = createAsyncThunk('netflix/getMyList', async (email) => {
  const url = `${NETFLIX_URL_API}/api/user/mylist/${email}`;
  const { data } = await axios.get(url);
  return data.movies;
});

export default getMyList;
