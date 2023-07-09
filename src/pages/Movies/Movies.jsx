import { useDispatch, useSelector } from 'react-redux';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import MoviesWrapper from './ui-Movies';
import { apiFetchGenres } from '../../services/movie-services';
import SelectGenre from '../../components/SelectGenre/SelectGenre';
import NotAvailable from '../../components/NotAvailable/NotAvailable';
import Slider from '../../components/Slider/Slider';
import { useEffect } from 'react';

const Movies = () => {
  const genres = useSelector((state) => state.netflix.genres);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiFetchGenres());
  }, []);

  return (
    <NetflixLayout>
      <MoviesWrapper>
        <SelectGenre genres={genres} type="movie" />
        {movies.length === 0 ? <NotAvailable /> : <Slider movies={movies} />}
      </MoviesWrapper>
    </NetflixLayout>
  );
};

export default Movies;
