import styled from 'styled-components';
import {
  mobileQuery, greyBackgroundColor, defaultFontFamily, mainColor, greyFontColor,
} from '@utils/css-util';

import HomeSVG from '@assets/svg/home.svg';
import ClipBoardCheckSVG from '@assets/svg/clipboard-check.svg';
import DocumentTextSVG from '@assets/svg/document-text.svg';
import TemplateSVG from '@assets/svg/template.svg';
import UserSVG from '@assets/svg/user.svg';

type StylePropType = {
  isnow : string;
}

export const NavContainer = styled.nav`
  ${mobileQuery}{
    display: flex;
    justify-content: space-around;
    position: relative;
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

export const HighlightLine = styled.div<StylePropType>`
  ${mobileQuery}{
    position: absolute;
    top : 0px;
    width: 72px;
    height: 2px;
    background-color: ${mainColor};
    visibility: ${({ isnow }) => (isnow === 'true' ? 'visible' : 'hidden')};
  }
`;

export const HomeIcon = styled(HomeSVG)<StylePropType>`
  > path {
    stroke: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const ClipBoardCheckIcon = styled(ClipBoardCheckSVG)<StylePropType>`
  > path {
    stroke: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const DocumentTextIcon = styled(DocumentTextSVG)<StylePropType>`
  > path {
    stroke: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const TemplateIcon = styled(TemplateSVG)<StylePropType>`
  > path {
    stroke: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const UserIcon = styled(UserSVG)<StylePropType>`
  > path {
    stroke: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`;

export const Description = styled.span<StylePropType>`
  ${mobileQuery}{
    margin-top: 0.6px;
    color: ${({ isnow }) => (isnow === 'true' ? mainColor : greyFontColor)};
    font: normal 11px ${defaultFontFamily};
  }
`;
