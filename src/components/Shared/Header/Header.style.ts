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
  display:flex;
  justify-content:space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${whiteColor};
  z-index: 3;
  ${mobileQuery} {
    height: 56px;
  }
`;
export const BackButton = styled.button`
  cursor: pointer;
  ${mobileQuery} {
    height: 24px;
    padding:0;
    margin: 0 0 0 8px;
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
    padding-left: 8px;
    color: ${mainFontColor};
    font: 500 16px/24px ${defaultFontFamily};
  }
`;

export const SubOptionPosition = styled.div`
  ${mobileQuery} {
    margin: 0 16px 0 0;
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
