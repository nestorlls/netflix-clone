import { styled } from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .back-icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PlayerWrapper;
