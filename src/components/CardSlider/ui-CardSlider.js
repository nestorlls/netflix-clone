import { styled } from 'styled-components';

const CardSliderWrapper = styled.div`
  gap: 2rem;

  .title-slider {
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    padding: 1rem 0;
  }

  .wrapper {
    position: relative;
    .cards {
      gap: 1rem;
    }
  }
`;

export default CardSliderWrapper;
