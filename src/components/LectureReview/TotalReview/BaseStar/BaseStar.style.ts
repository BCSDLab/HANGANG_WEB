import styled from 'styled-components';
import EmptyStarSVG from '@assets/svg/star-empty.svg';

export const BaseStarsBox = styled.div`
  width: 300px;
  height: 60px;
  position: absolute;
  cursor: pointer;
`;

export const BaseEmptyStarSVG = styled(EmptyStarSVG)`
  width: 60px;
  height: 60px;
`;
