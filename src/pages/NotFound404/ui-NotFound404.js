import { styled } from 'styled-components';

const NotFound404Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 8rem;
  }
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }

  .btn-back {
    margin-top: 2rem;
    width: 10rem;
    background-color: rgba(255, 255, 255, 0.2);

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export default NotFound404Wrapper;
