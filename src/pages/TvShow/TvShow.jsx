import { useDispatch, useSelector } from 'react-redux';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import TvShowWrapper from './ui-TvShow';
import { useEffect } from 'react';
import { apiFetchGenres } from '../../services/movie-services';
import Slider from '../../components/Slider/Slider';
import NotAvailable from '../../components/NotAvailable/NotAvailable';
import SelectGenre from '../../components/SelectGenre/SelectGenre';

const TvShow = () => {
  const genres = useSelector((state) => state.netflix.genres);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiFetchGenres());
  }, []);

  return (
    <NetflixLayout>
      <TvShowWrapper>
        <SelectGenre genres={genres} type="tv" />
        {movies.length === 0 ? <NotAvailable /> : <Slider movies={movies} />}
      </TvShowWrapper>
    </NetflixLayout>
  );
};

export default TvShow;
