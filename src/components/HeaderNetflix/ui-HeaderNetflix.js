import { styled } from 'styled-components';

const HeaderNetflixWrapper = styled.div`
  width: 100%;
  position: sticky;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;

  .scrolled {
    background-color: black;
    transition: 0.5s ease-in-out;
    width: 100%;
  }

  .navbar {
    top: 0;
    height: 4.5rem;
    padding: 3rem 5rem;

    .left {
      gap: 5rem;

      .logo {
        img {
          height: 5rem;
        }
      }

      .links {
        gap: 2rem;

        .link {
          list-style: none;

          a {
            text-decoration: none;
            color: white;

            &:hover {
              color: rgba(255, 255, 255, 0.7);
            }
          }
        }
      }
    }

    .right {
      gap: 1rem;

      .search {
        gap: 0.8rem;
        padding: 0.5rem;
        padding-left: 0.8rem;

        .btn-search {
          background-color: transparent;
          border: none;
          cursor: pointer;

          svg {
            color: white;
            font-size: 1.2rem;
          }
        }

        .input-search {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background: transparent;
          border: none;
        }
      }

      .show-search {
        .input-search {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.7rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(0, 0, 0, 0.8);
          border-radius: 5px;
          color: white;
          transition: 0.3s ease-in-out;

          &:focus {
            outline: none;
            background: rgba(54, 54, 54, 0.7);
          }

          &::placeholder {
            color: white;
            opacity: 0.9;
            font-size: 0.85rem;
            letter-spacing: 0.8px;
          }
        }
      }

      .btn-logout {
        background-color: transparent;
        border: none;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default HeaderNetflixWrapper;
