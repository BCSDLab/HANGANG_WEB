import styled from 'styled-components';
import {
  mobileQuery, greyBackgroundColor, defaultFontFamily, mainColor, greyFontColor
} from '@utils/css-util';

import HomeSVG from '@assets/svg/home.svg';
import ClipBoardCheckSVG from '@assets/svg/clipboard-check.svg';
import DocumentTextSVG from '@assets/svg/document-text.svg';
import TemplateSVG from '@assets/svg/template.svg';
import UserSVG from '@assets/svg/user.svg';

// 해당페이지면 hight line visibility : visible
// svg, description color : mainColor

export const NavContainer = styled.nav`
  ${mobileQuery}{
    display: flex;
    justify-content: space-around;
    position: relative;
    padding-bottom: 16px;
    border-top: solid 1px ${greyBackgroundColor};
  }
`

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

export const HighlightLine = styled.div`
  ${mobileQuery}{
    visibility: hidden;
    /* 요부분은 페이지에따라서 다르게 */
    position: absolute;
    top : 0px;
    width: 72px;
    height: 2px;
    background-color: ${mainColor};
  }
`;

export const HomeIcon = styled(HomeSVG)`
  > path {
    stroke: ${greyFontColor};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`

export const ClipBoardCheckIcon = styled(ClipBoardCheckSVG)`
  > path {
    stroke: ${greyFontColor};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`

export const DocumentTextIcon = styled(DocumentTextSVG)`
  > path {
    stroke: ${greyFontColor};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`

export const TemplateIcon = styled(TemplateSVG)`
  > path {
    stroke: ${greyFontColor};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`

export const UserIcon = styled(UserSVG)`
  > path {
    stroke: ${greyFontColor};
  }
  ${mobileQuery}{
    width: 24px;
    height: 24px;
  }
`

export const Description = styled.span`
  ${mobileQuery}{
    margin-top: 0.6px;
    color: ${greyFontColor};
    font: normal 11px ${defaultFontFamily};
  }
`