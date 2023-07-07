import { styled } from 'styled-components';

const SignupWrapper = styled.div`
  margin: auto;

  .signup-body {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-top: 12rem;
    gap: 2rem;
    text-align: center;
    padding: 2rem;

    p {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
    }

    .input-container {
      .input-body {
        gap: 1rem;

        h3 {
          font-size: clamp(1rem, 2.5vw, 1.5rem);
          font-weight: 500;
        }

        .form-signup {
          gap: 1rem;
          width: 100%;
          margin: 0 auto;

          .inputs {
            gap: 1rem;
            width: 80%;
          }

          .btn-signup__submit {
            min-width: 300px;
            justify-self: start;
          }
        }
      }
    }
  }
`;

export default SignupWrapper;
