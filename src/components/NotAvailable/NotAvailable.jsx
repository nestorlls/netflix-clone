import React from 'react';
import { styled } from 'styled-components';

const NotAvailable = () => {
  return (
    <Wrapper>
      <h1 className="not-available">No movies available for selected genre</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 7rem;

  .not-available {
    text-align: center;
    font-size: 2rem;
    padding: 2rem;
    font-weight: bold;
    color: white;
  }
`;

export default NotAvailable;
