import React from 'react';
import SliderWrapper from './ui-Slider';
import CardSlider from '../CardSlider/CardSlider';

const getSliceMovies = (movies, start, end) => {
  return movies.slice(start, end);
};

const Slider = ({ movies }) => {
  const trendingNow = getSliceMovies(movies, 0, 16);
  const newRelease = getSliceMovies(movies, 16, 32);
  const blockbuster = getSliceMovies(movies, 32, 48);
  const populatOnNetflix = getSliceMovies(movies, 48, 64);
  const actionMovies = getSliceMovies(movies, 64, 80);
  const epics = getSliceMovies(movies, 80, 100);

  return (
    <SliderWrapper>
      <CardSlider title="Trending Now" movies={trendingNow} />
      <CardSlider title="New Releases" movies={newRelease} />
      <CardSlider title="Blockbuster " movies={blockbuster} />
      <CardSlider title="Popular Netflix" movies={populatOnNetflix} />
      <CardSlider title="Action Movies" movies={actionMovies} />
      <CardSlider title="Epic" movies={epics} />
    </SliderWrapper>
  );
};

export default Slider;
