import styled from 'styled-components';
import {
  mobileQuery, greyBackgroundColor, defaultFontFamily, mainColor, greyFontColor, whiteColor,
} from '@utils/css-util';

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${whiteColor};
  z-index: 3;
  ${mobileQuery}{
    display: flex;
    justify-content: space-around;
    border-top: 1px solid ${greyBackgroundColor};
  }
`;

export const Icon = styled.svg`
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const Description = styled.span`
  ${mobileQuery}{
    margin-top: 1px;
    font: normal 11px ${defaultFontFamily};
  }
`;

type SelectedPropType = {
  $selected : boolean;
}

export const NavOption = styled.button<SelectedPropType>`
  ${mobileQuery}{
    flex:1 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0 16px 0;
    border: none;
    border-top: ${(props) => props.$selected && `2px solid ${mainColor}`};
    background-color: transparent;
    ${Icon}{
      > path {
        stroke: ${(props) => (props.$selected ? mainColor : greyFontColor)};
      }
    }
    ${Description}{
      color: ${(props) => (props.$selected ? mainColor : greyFontColor)};
    }
  }
`;
