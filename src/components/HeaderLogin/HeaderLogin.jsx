import { useState } from 'react';
import logo from '../../assets/logo.png';
import HeaderLoginWrapper from './ui-HeaderLogin';
const HeaderLogin = () => {
  return (
    <HeaderLoginWrapper className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <button type="button" className="btn">
        Login
      </button>
    </HeaderLoginWrapper>
  );
};

export default HeaderLogin;
