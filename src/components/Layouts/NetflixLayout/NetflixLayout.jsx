import React, { useEffect } from 'react';
import NetflixLayoutWrapper from './ui-NetflixLayout';
import HeaderNetflix from '../../HeaderNetflix/HeaderNetflix';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../utils/firebase-config';

const NetflixLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });
  }, []);

  return (
    <NetflixLayoutWrapper>
      <HeaderNetflix />
      <div className="container">{children}</div>
    </NetflixLayoutWrapper>
  );
};

export default NetflixLayout;
