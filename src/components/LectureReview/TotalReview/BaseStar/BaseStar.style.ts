import styled from 'styled-components';
import EmptyStarSVG from '@assets/svg/star-empty.svg';

export const BaseStarsBox = styled.div`
  width: 200px;
  height: 40px;
  position: absolute;
  cursor: pointer;
`;

export const BaseEmptyStarSVG = styled(EmptyStarSVG)`
  width: 40px;
  height: 40px;
`;
