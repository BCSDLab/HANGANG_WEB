import React from 'react';
import FullStarSVG from 'public/star-full.svg';
import HalfStarSVG from 'public/star-half.svg';
import EmptyStarSVG from 'public/star-empty.svg';
import { StarContainer } from './StarStyle';

type PropType = {
  starData: { id: number; value: string };
};

const Star = ({ starData: { value } }: PropType) => {
  let STAR;
  switch (value) {
    case 'full':
      STAR = <FullStarSVG />;
      break;
    case 'half':
      STAR = <HalfStarSVG />;
      break;
    case 'empty':
      STAR = <EmptyStarSVG />;
      break;
    default:
      throw new Error('Star State is not proper');
  }
  return <StarContainer>{STAR}</StarContainer>;
};
export default Star;
