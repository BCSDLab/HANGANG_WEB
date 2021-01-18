import styled from 'styled-components';
import * as style from '@utils/css-util';
import ExclamationSVG from '@assets/svg/exclamation.svg';

export const ReviewTitleCautionContainer = styled.div`
    display:flex;
    align-items: center;
`;

export const CautionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top : 16px;
`;

export const CautionComment = styled.span`
  margin-left: 4px;
  color: ${style.yellowColor};
  font-family: ${style.defaultFontFamily};
  font-size: 11px;
`;

export const CautionLectureSVG = styled(ExclamationSVG)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`;
