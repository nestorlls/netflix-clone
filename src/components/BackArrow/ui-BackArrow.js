import { styled } from 'styled-components';

const BackArrowWrapper = styled.div`
  .back-icon {
    position: absolute;
    top: 7rem;
    left: 4rem;
    font-size: 3rem;
    cursor: pointer;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    color: white;
    z-index: 100;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default BackArrowWrapper;
