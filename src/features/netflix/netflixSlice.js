import { createSlice } from '@reduxjs/toolkit';
import {
  apiFetchGenres,
  apiFetchMovieByGenre,
  apifetchData,
} from '../../services/movie-services';
import getMyList from '../../services/myList-services';

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  myList: [],
};

const NetflixSlice = createSlice({
  name: 'netflix',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(apiFetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });

    builder.addCase(apifetchData.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(apiFetchMovieByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(getMyList.fulfilled, (state, action) => {
      state.myList = action.payload;
    });
  },
});

export default NetflixSlice.reducer;
