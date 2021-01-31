import styled from 'styled-components';
import LeftSVG from '@assets/svg/chevron-left.svg';
import {
  mobileQuery,
  defaultFontFamily,
  greyBackgroundColor,
  mainFontColor,
  whiteColor,
  mainColor,
} from '@utils/css-util';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${whiteColor};
  z-index: 3;
  ${mobileQuery} {
    height: 72px;
    text-align: center;
  }
`;
export const BackButton = styled.button`
  cursor: pointer;
  ${mobileQuery} {
    position: absolute;
    top: 33px;
    left: 8px;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;
export const LeftIcon = styled(LeftSVG)`
  ${mobileQuery} {
    width: 24px;
    height: 24px;
  }
`;
export const HeaderTitle = styled.span`
  ${mobileQuery} {
    position: relative;
    top: 33px;
    color: ${mainFontColor};
    font: 500 16px/24px ${defaultFontFamily};
  }
`;

export const SubOptionButton = styled.button`
  cursor: pointer;
  ${mobileQuery} {
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${mainFontColor};
  }
`;

export const SubOptionPosition = styled.div`
  ${mobileQuery} {
    position: absolute;
    top: 35px;
    right: 16px;
  }
`;

export const ProgressOuterBar = styled.div`
  position: absolute;
  bottom: 0;
  width : 100%;
  height: 1px;
  background-color: ${greyBackgroundColor};
`;

type ProgressPropsType = {
  progress : number;
}

export const ProgressBar = styled.div<ProgressPropsType>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: ${mainColor};
`;
