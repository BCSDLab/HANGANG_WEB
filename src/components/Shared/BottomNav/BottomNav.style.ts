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
    padding-bottom: 16px;
    border-top: solid 1px ${greyBackgroundColor};
  }
`;

export const NavOption = styled.button`
  ${mobileQuery}{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55px;
    margin-top: 16px;
    padding: 0;
    border: none;
    background-color: transparent;
  }
`;

type SelectedPropType = {
  selected : boolean;
}

export const HighlightLine = styled.div<SelectedPropType>`
  ${mobileQuery}{
    position: absolute;
    top : 0px;
    width: 72px;
    height: 2px;
    background-color: ${mainColor};
    visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
  }
`;

export const Icon = styled.svg<SelectedPropType>`
  > path {
    stroke: ${(props) => (props.selected ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }

`;

export const Description = styled.span<SelectedPropType>`
  ${mobileQuery}{
    margin-top: 1px;
    color: ${({ selected }) => (selected ? mainColor : greyFontColor)};
    font: normal 11px ${defaultFontFamily};
  }
`;
