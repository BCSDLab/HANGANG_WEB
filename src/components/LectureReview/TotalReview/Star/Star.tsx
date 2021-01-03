import React, { forwardRef } from 'react';
import FullStarSVG from '@assets/svg/star-full.svg';
import HalfStarSVG from '@assets/svg/star-half.svg';
import EmptyStarSVG from '@assets/svg/star-empty.svg';
import { StarContainer } from './Star.style';

type PropType = {
  starData: { id: number; value: string };
};

const Star = forwardRef<PropType, HTMLUListElement>(({ value }, ref) => {
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
  return (
    <StarContainer
      onClick={(e) => {
        console.log(e.nativeEvent.offsetX);
        console.log(ref.offsetLeft);
      }}
    >
      {STAR}
    </StarContainer>
  );
});
export default Star;
