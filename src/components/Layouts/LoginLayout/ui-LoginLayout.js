import { styled } from 'styled-components';
import bgimg from '../../../assets/landing.jpg';

const LoginLayoutWrapper = styled.div`
  position: relative;

  .image {
    width: 100vw;
    height: 100vh;
    background-image: url(${bgimg});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.5;
  }

  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default LoginLayoutWrapper;
