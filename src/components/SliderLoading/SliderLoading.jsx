import React from 'react';
import SliderLoadingWrapper from './ui-SliderLoading';

const cards = new Array(16).fill(0).map((_, index) => {
  return <div className="card" key={index} />;
});

const SliderLoading = () => {
  return (
    <SliderLoadingWrapper className="flex column">
      {Array(7)
        .fill(0)
        .map((_, index) => (
          <React.Fragment key={index}>
            <div className="title-loading" />
            <div className="card-slider flex a-center ">{cards}</div>
          </React.Fragment>
        ))}
    </SliderLoadingWrapper>
  );
};

export default SliderLoading;
