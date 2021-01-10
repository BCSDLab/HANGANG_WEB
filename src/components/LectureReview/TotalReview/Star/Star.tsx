import React from 'react';
import FullStarSVG from '@assets/svg/star-full.svg';
import HalfStarSVG from '@assets/svg/star-half.svg';

type PropType = {
  starReviewPoint: number;
};

const Star : React.FC<PropType> = ({ starReviewPoint }) => {
  const fullStarCount = Math.floor(starReviewPoint / 2);
  const fullStarArray = [];
  for (let i = 1; i <= fullStarCount; i += 1) {
    fullStarArray.push({ id: i, star: <FullStarSVG /> });
  }

  return (
    <>
      {fullStarArray.map(({ id, star }) => <React.Fragment key={id}>{star}</React.Fragment>)}
      {starReviewPoint % 2 === 1 && <HalfStarSVG />}
    </>
  );
};

export default Star;
