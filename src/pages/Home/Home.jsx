import React from 'react';
import HomeWrapper from './ui-Home';
import NetflixLayout from '../../components/Layouts/NetflixLayout/NetflixLayout';
import bgImg from '../../assets/home.jpg';

const Home = () => {
  return (
    <NetflixLayout>
      <HomeWrapper>
        <img src={bgImg} alt="" />
      </HomeWrapper>
    </NetflixLayout>
  );
};

export default Home;
