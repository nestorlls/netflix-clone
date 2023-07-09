import { useNavigate } from 'react-router-dom';
import NotFound404Wrapper from './ui-NotFound404';

const NotFound404 = () => {
  const navigate = useNavigate();
  return (
    <NotFound404Wrapper className="flex column j-center a-center">
      <h1>404</h1>
      <h2>Ups! Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist!</p>
      <button className="btn btn-back" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </NotFound404Wrapper>
  );
};

export default NotFound404;
