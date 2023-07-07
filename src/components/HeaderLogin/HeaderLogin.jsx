import logo from '../../assets/logo.png';
import HeaderLoginWrapper from './ui-HeaderLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const HeaderLogin = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigation = () => {
    navigate('/login');
  };

  return (
    <HeaderLoginWrapper className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      {pathname === '/signup' && (
        <div>
          <button type="button" className="btn" onClick={handleNavigation}>
            Login
          </button>
        </div>
      )}
    </HeaderLoginWrapper>
  );
};

export default HeaderLogin;
