import React from 'react';
import Star from '../Star/Star';
import { StarsContainer } from './StarsStyle';

type PropType = {
  metadata: { id: number; value: string }[];
};

const Stars = ({ metadata }: PropType) => {
  return (
    <StarsContainer>
      {metadata.map((star) => {
        return <Star key={star.id} starData={star} />;
      })}
    </StarsContainer>
  );
};

export default Stars;
