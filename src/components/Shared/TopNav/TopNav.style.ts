import styled from 'styled-components';
import LeftSVG from '@assets/svg/chevron-left.svg';
import {
  mobileQuery, defaultFontFamily, greyBackgroundColor, mainFontColor,
} from '@utils/css-util';

export const TopNavContainer = styled.div`
  ${mobileQuery}{
    position: relative;
    height: 95px;
    border-bottom: 1px solid ${greyBackgroundColor};
    text-align: center;
  }
`;
export const BackButton = styled.button`
  ${mobileQuery}{
    position: absolute;
    top : 56px;
    left: 8px;
    padding: 0;
    border: none;
    background-color: transparent;
  }
  cursor: pointer;
`;
export const LeftIcon = styled(LeftSVG)`
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;
export const TopNavTitle = styled.span`
  ${mobileQuery}{
    position: relative;
    top : 56px;
    color : ${mainFontColor};
    font: 500 16px/24px ${defaultFontFamily};
  }
`;
export const SubOptionButton = styled.button`
  ${mobileQuery}{
    position: absolute;
    top: 58px;
    right: 16px;
    padding: 0;
    border: none;
    background-color: transparent;
    color : ${mainFontColor};
  }
  cursor: pointer;
`;
