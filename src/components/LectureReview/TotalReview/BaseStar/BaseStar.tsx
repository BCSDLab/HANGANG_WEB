import React from 'react';
import { BaseStarsBox, BaseEmptyStarSVG } from './BaseStar.style';

const BaseStar : React.FC = () => (
  <BaseStarsBox>
    <BaseEmptyStarSVG />
    <BaseEmptyStarSVG />
    <BaseEmptyStarSVG />
    <BaseEmptyStarSVG />
    <BaseEmptyStarSVG />
  </BaseStarsBox>
);

export default BaseStar;
