import { styled } from 'styled-components';

const InfoWrapper = styled.div`
  img {
    margin-top: 5rem;
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }

  .container-info {
    position: relative;
    height: 80vh;
    width: 100vw;

    .info-movie {
      align-self: flex-end;

      h1 {
        font-size: clamp(3rem, 10vw, 4rem);
      }
      h2 {
        margin: 1rem 0;
        font-size: clamp(1rem, 3vw, 2rem);
      }
      p {
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        line-height: 1.5;
      }

      .vote {
        gap: 2rem;
        margin-top: 1rem;

        p {
          font-size: clamp(1rem, 2.5vw, 1.8rem);
        }
      }
    }
  }
`;

export default InfoWrapper;
