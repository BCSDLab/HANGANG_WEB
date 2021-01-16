import React from 'react';
import styled, { css } from 'styled-components';
import StarSVG from '@assets/svg/star.svg';
import { greyBackgroundColor, mobileQuery, yellowColor } from '@utils/css-util';

const Container = styled.div`
  position: relative;
  
  ${mobileQuery} {
    width: 16px;
    height: 16px;
  }
`;

const StarIcon = styled(StarSVG)`
  > path {
    fill: ${greyBackgroundColor};
  }


  ${mobileQuery} {
    width: 16px;
    height: 16px;
  }
`;

interface IActiveObject {
  active: boolean;
}

const FullStar = styled.div<IActiveObject>`
  ${(props) => (props.active ? css`
    > ${StarIcon} > path {
      fill: ${yellowColor};
    }
  ` : null)}
`;

const HalfStar = styled.div<IActiveObject>`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  ${(props) => (props.active ? css`
    > ${StarIcon} > path {
      fill: ${yellowColor};
    }
  ` : null)}
`;

interface IProps {
  fill: 0 | 1 | 2;
}

const Star: React.FC<IProps> = ({
  fill,
}) => (
  <Container>
    <HalfStar active={fill > 0}><StarIcon /></HalfStar>
    <FullStar active={fill === 2}><StarIcon /></FullStar>
  </Container>
);

export default Star;
