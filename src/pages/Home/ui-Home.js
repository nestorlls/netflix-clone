import { styled } from 'styled-components';
import bgImgMovie from '../../assets/home.jpg';

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;

  .bgImageMovie {
    height: 100vh;
    width: 100%;
    background-image: url(${bgImgMovie});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }

  .home-container {
    position: relative;
    height: 90vh;

    .home-content {
      align-items: self-start;
      gap: 2rem;

      :is(img, .buttons) {
        margin-left: 2rem;
      }

      .buttons {
        gap: 2rem;

        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.5rem;
          padding: 0.5rem 2rem;
          border: none;
          cursor: pointer;
          transition: 0.3s ease-in-out;

          &:hover {
            opacity: 0.8;
          }

          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;

            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;

export default HomeWrapper;
