import { styled } from 'styled-components';

const LoginWrapper = styled.div`
  max-width: 450px;
  margin: 0 auto;

  .login-body {
    padding: 60px 68px 48px;
    min-height: 500px;
    background-color: rgba(0, 0, 0, 0.6);

    .login-title {
      margin-top: 0;
      margin-bottom: 2rem;
    }

    .form-content {
      gap: 1.4rem;

      .btn-login {
        height: 48px;
        margin-top: 1.6rem;
      }
    }

    p {
      margin-top: 4rem;
      color: rgba(255, 255, 255, 0.5);
      a {
        color: white;
        text-decoration: none;
        font-weight: medium;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default LoginWrapper;
