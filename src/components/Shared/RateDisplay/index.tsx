import React from 'react';
import styled from 'styled-components';
import Star from './Star';

const Container = styled.div`
  display: flex;
`;

interface IProps {
  rate: number;
}

function getFillCount(currentRate: number, index: number): 0 | 1 | 2 {
  if (currentRate < index * 2) return 0;
  if (currentRate < (index + 1) * 2 && currentRate > index * 2) return 1;
  return 2;
}

const RateDisplay: React.FC<IProps> = ({
  rate,
}) => (
  <Container>
    {Array.from({ length: Math.ceil(rate / 2) }, (_, index) => index)
      .map((indexNumber) => (
        <Star key={indexNumber} fill={getFillCount(rate, indexNumber)} />
      ))}
  </Container>
);

export default RateDisplay;
