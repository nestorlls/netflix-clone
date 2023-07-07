import React from 'react';
import NetflixLayoutWrapper from './ui-NetflixLayout';
import HeaderNetflix from '../../HeaderNetflix/HeaderNetflix';

const NetflixLayout = ({ children }) => {
  return (
    <NetflixLayoutWrapper>
      <HeaderNetflix />
      <div className="container">{children}</div>
    </NetflixLayoutWrapper>
  );
};

export default NetflixLayout;
