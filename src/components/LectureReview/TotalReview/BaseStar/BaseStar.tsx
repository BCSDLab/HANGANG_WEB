import React from 'react';
import EmptyStarSVG from '@assets/svg/star-empty.svg';
import { BaseStarsBox } from './BastStar.style';

const BaseStar = () => (
  <BaseStarsBox>
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
    <EmptyStarSVG />
  </BaseStarsBox>
);

export default BaseStar;
