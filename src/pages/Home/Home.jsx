import React, { useEffect, useState } from 'react';
import HomeWrapper from './ui-Home';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import bgImg from '../../assets/home.jpg';
import movielogo from '../../assets/homeTitle.webp';
import Slider from '../../components/Slider/Slider';
import {
  apiFetchGenres,
  apiFetchMovieByGenre,
  apifetchData,
} from '../../services/movie-services';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const isLoaded = useSelector((state) => state.netflix.genresLoaded);
  const genres = useSelector((state) => state.netflix.genres);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

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

  console.log(movies);

  return (
    <NetflixLayout>
      <HomeWrapper>
        <div className="bgImageMovie"></div>
        <div className="home-container flex a-center">
          <div className="home-content flex column">
            <img src={movielogo} alt="movie logo" />
            <div className="buttons flex">
              <button>Play</button>
              <button>More Info</button>
            </div>
          </div>
        </div>
        <Slider movies={movies} />
      </HomeWrapper>
    </NetflixLayout>
  );
};

export default Home;
