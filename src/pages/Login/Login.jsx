import React, { useEffect, useState } from 'react';
import LoginLayout from '../../components/Layouts/LoginLayout/LoginLayout';
import LoginWrapper from './ui-Login';
import Flied from '../../components/Field/Flied';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/auth-service';
import useUser from '../../hooks/useUser';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData);
  };

  return (
    <LoginLayout>
      <LoginWrapper>
        <div className="login-body flex column">
          <h1 className="login-title">Sign In</h1>
          <form className="form-content flex column" onSubmit={handleSubmit}>
            <Flied
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Please enter your email"
              onChange={handleChange}
            />
            <Flied
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Please enter your password"
              onChange={handleChange}
            />
            <button className="btn btn-login" type="submit">
              Login
            </button>
          </form>
          <p>
            New to Netflix? <Link to="/signup"> Sing up know</Link>
          </p>
        </div>
      </LoginWrapper>
    </LoginLayout>
  );
};

export default Login;
