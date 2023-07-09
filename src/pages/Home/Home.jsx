import React, { memo, useEffect } from 'react';
import HomeWrapper from './ui-Home';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import movielogo from '../../assets/homeTitle.webp';
import Slider from '../../components/Slider/Slider';
import { apiFetchGenres, apifetchData } from '../../services/movie-services';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SliderLoading from '../../components/SliderLoading/SliderLoading';

const Home = () => {
  const isLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/player');
  };
  useEffect(() => {
    dispatch(apiFetchGenres());
  }, []);

  useEffect(() => {
    const getMovie = setTimeout(async () => {
      dispatch(apifetchData({ type: 'all' }));
    }, 500);

    return () => {
      clearTimeout(getMovie);
    };
  }, [isLoaded]);

  return (
    <NetflixLayout>
      <HomeWrapper>
        <div className="bgImageMovie"></div>
        <div className="home-container flex a-center">
          <div className="home-content flex column">
            <img src={movielogo} alt="movie logo" />
            <div className="buttons flex">
              <button onClick={handleNavigate}>Play</button>
              <button>More Info</button>
            </div>
          </div>
        </div>
        {movies.length === 0 ? <SliderLoading /> : <Slider movies={movies} />}
      </HomeWrapper>
    </NetflixLayout>
  );
};

export default memo(Home);
