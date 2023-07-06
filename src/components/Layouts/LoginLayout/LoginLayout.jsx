import HeaderLogin from '../../HeaderLogin/HeaderLogin';
import LoginLayoutWrapper from './ui-LoginLayout';

const LoginLayout = ({ children }) => {
  return (
    <LoginLayoutWrapper>
      <div className="image"></div>
      <div className="container">
        <HeaderLogin />
        {children}
      </div>
    </LoginLayoutWrapper>
  );
};

export default LoginLayout;
