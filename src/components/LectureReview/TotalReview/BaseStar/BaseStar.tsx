import React from 'react';
import EmptyStarSVG from '@assets/svg/star-empty.svg';
import BaseStarsBox from './BaseStar.style';

const BaseStar : React.FC = () => (
  <BaseStarsBox>
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
  </BaseStarsBox>
);

export default BaseStar;
