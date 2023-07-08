import { styled } from 'styled-components';
import { device } from '../../utils/MediaQuerys';

const CardWrapper = styled.div`
  gap: 3rem;
  min-width: 250px;
  width: 250px;
  height: 100%;
  position: relative;

  .image-card {
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in-out;

    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }

    &:hover {
      border: 1px solid white;
      transform: scale(1.05);
    }
  }
  .hover {
    position: absolute;
    top: -25vh;
    left: 0;
    width: 20rem;
    height: max-content;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #181818;
    z-index: 1;
    transition: 0.3s ease-in-out;

    .img-video__hover {
      position: relative;
      height: 140px;

      video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        border-radius: 0.5rem;
      }
    }

    .info-movie {
      gap: 1rem;
      padding: 0.5rem;

      .icons-movie {
        gap: 1rem;
        padding: 0.5rem 0;

        svg {
          cursor: pointer;
          font-size: 1.5rem;
          transition: 0.3s ease-in-out;

          &:hover {
            color: #b8b8b8;
          }
        }
      }
    }

    .genres-box {
      gap: 0.5rem;
      padding: 0.5rem;

      span {
        padding: 0.2rem 0.5rem;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 0.2rem;
      }
    }
  }

  @media ${device.desktop} {
    .hover {
      top: -18vh;
    }
  }
`;

export default CardWrapper;
