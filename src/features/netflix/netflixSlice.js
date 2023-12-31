import { createSlice } from '@reduxjs/toolkit';
import {
  apiFetchGenres,
  apiFetchMovieByGenre,
  apifetchData,
  getInfoMovie,
  searchMovies,
} from '../../services/movie-services';
import {
  getMyList,
  removeMovieFromMyList,
} from '../../services/myList-services';

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  myList: [],
  movieInfo: {},
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

    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(apiFetchMovieByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    builder.addCase(getMyList.fulfilled, (state, action) => {
      state.myList = action.payload;
    });

    builder.addCase(removeMovieFromMyList.fulfilled, (state, action) => {
      state.myList = action.payload;
    });

    builder.addCase(getInfoMovie.fulfilled, (state, action) => {
      state.movieInfo = action.payload;
    });
  },
});

export default NetflixSlice.reducer;
