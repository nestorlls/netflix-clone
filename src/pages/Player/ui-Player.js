import { styled } from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PlayerWrapper;
