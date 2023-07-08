import { createSlice } from '@reduxjs/toolkit';
import { apiFetchGenres, apifetchData } from '../../services/movie-services';

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
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
  },
});

export default NetflixSlice.reducer;
