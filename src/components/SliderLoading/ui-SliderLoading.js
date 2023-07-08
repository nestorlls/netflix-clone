import { styled } from 'styled-components';

const SliderLoadingWrapper = styled.div`
  margin-top: 4rem;
  gap: 2rem;

  .title-loading {
    width: 200px;
    padding: 1rem 0;
  }

  .card-slider {
    gap: 1rem;

    .card {
      min-width: 250px;
      height: 150px;
    }
  }

  :is(.title-loading, .card-slider .card) {
    border-radius: 0.5rem;
    animation-duration: 3s !important;
    animation-fill-mode: forwards !important;
    animation-iteration-count: infinite;
    animation-name: fadeIn;
    animation-timing-function: linear;
    background-color: #282c34;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.13) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  @keyframes fadeIn {
    0% {
      background-position: -80px 0;
    }
    100% {
      background-position: 80px 0;
    }
  }
`;

export default SliderLoadingWrapper;
