import React from 'react';
import FullStarSVG from '@assets/svg/star-full.svg';
import HalfStarSVG from '@assets/svg/star-half.svg';

type PropType = {
  starReviewPoint: number;
};

const Star = ({ starReviewPoint }: PropType) => {
  const fullStarCount = Math.floor(starReviewPoint / 2);
  const fullStarArray = [];
  for (let i = 0; i < fullStarCount; i++) {
    fullStarArray.push(<FullStarSVG />);
  }

  const halfStarCount = starReviewPoint % 2 === 0 ? 0 : 1;
  const halfStarArray = [];
  if (halfStarCount === 1) halfStarArray.push(<HalfStarSVG />);

  return (
    <>
      {fullStarArray.map((star, idx) => <React.Fragment key={idx}>{star}</React.Fragment>)}
      {halfStarArray.map((star, idx) => <React.Fragment key={idx}>{star}</React.Fragment>)}
    </>
  );
};

export default Star;
