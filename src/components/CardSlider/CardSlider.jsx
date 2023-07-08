import { useRef, useState } from 'react';
import Card from '../Card/Card';
import SliderAction from '../SliderAction/SliderAction';
import CardSliderWrapper from './ui-CardSlider';

const CardSlider = ({ title, movies }) => {
  const sliderRef = useRef();
  const [isShowControls, setIsShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);

  const handleDirection = (direction) => {
    const SLIDE_WIDTH = 500;
    const MAX_SLIDES = 5;

    const distance = sliderRef.current.getBoundingClientRect().x - 15;

    if (direction === 'left' && sliderPosition > 0) {
      sliderRef.current.style.transform = `translateX(${
        SLIDE_WIDTH + distance
      }px)`;
      setSliderPosition(sliderPosition - 1);
    }

    if (direction === 'right' && sliderPosition < MAX_SLIDES) {
      sliderRef.current.style.transform = `translateX(${
        -SLIDE_WIDTH + distance
      }px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <CardSliderWrapper
      className="flex column"
      onMouseEnter={() => setIsShowControls(true)}
      onMouseLeave={() => setIsShowControls(false)}>
      <h3 className="title-slider">{title}</h3>
      <div className="wrapper flex a-center">
        <SliderAction left isShow={isShowControls} onClick={handleDirection} />
        <div className="cards flex" ref={sliderRef}>
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
        <SliderAction right isShow={isShowControls} onClick={handleDirection} />
      </div>
    </CardSliderWrapper>
  );
};

export default CardSlider;
