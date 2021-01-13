import React from 'react';
import { RegisterFullStarSVG, RegisterHalfStarSVG } from './Star.style';

type PropType = {
  starReviewPoint: number;
};

const Star : React.FC<PropType> = ({ starReviewPoint }) => {
  const fullStarCount = Math.floor(starReviewPoint / 2);
  const fullStarArray = [];
  for (let i = 1; i <= fullStarCount; i += 1) {
    fullStarArray.push({ id: i, star: <RegisterFullStarSVG /> });
  }

  return (
    <>
      {fullStarArray.map(({ id, star }) => <React.Fragment key={id}>{star}</React.Fragment>)}
      {starReviewPoint % 2 === 1 && <RegisterHalfStarSVG />}
    </>
  );
};

export default Star;
