import { styled } from 'styled-components';

const SliderActionWrapper = styled.div`
  .slider-action {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 11;
    top: 0;
    bottom: 0;

    svg {
      font-size: 2rem;
      width: 3rem;
      height: 3rem;
      padding: 0.2rem;
      transition: 0.3s ease-in-out;

      &:hover {
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  :is(.left, .right) {
    cursor: pointer;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .none {
    display: none;
  }
`;

export default SliderActionWrapper;
