import React, { useRef, useState } from 'react';
import { StarsContainer } from './Stars.style';
import FullStarSVG from '@assets/svg/star-full.svg';
import HalfStarSVG from '@assets/svg/star-half.svg';
import EmptyStarSVG from '@assets/svg/star-empty.svg';

type PropType = {
  metadata: { id: number; value: string }[];
};

const Stars = () => {
  const [containerX, setContainerX] = useState(0);

  const starsContainerRef = (e: HTMLUListElement) => {
    // console.log(e.getBoundingClientRect().x);
    const x = e.getBoundingClientRect().x;
    setContainerX(x);
  };
  const starClick = (e: React.MouseEvent<SVGElement>) => {
    console.log(e.nativeEvent.offsetX);
    console.log(`containerX : ${containerX}`);
  };
  return (
    <StarsContainer ref={starsContainerRef}>
      <FullStarSVG onClick={starClick} />
      <FullStarSVG onClick={starClick} />
      <FullStarSVG onClick={starClick} />
      <EmptyStarSVG onClick={starClick} />
      <EmptyStarSVG onClick={starClick} />
    </StarsContainer>
  );
};

export default Stars;
