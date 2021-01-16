import styled, { css } from 'styled-components';
import {
  defaultFontFamily, greyFontColor, mainColor, mainFontColor, whiteColor,
} from '@utils/css-util';

export const Dialog = styled.div`
  width: 280px;
  padding: 21px 0 8px;
  border-radius: 8px;
  background: ${whiteColor};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  margin: 0 0 12px;
  padding: 0 24px;
  font: normal 500 14px/20px ${defaultFontFamily};
  color: ${mainFontColor};
`;

export const Content = styled.div`
  margin: 0 0 8px;
  padding: 0 24px;
  font: normal normal 12px/14px ${defaultFontFamily};
  color: ${mainFontColor};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 12px;
`;

const textButtonStyle = css`
  height: 36px;
  padding: 0 7px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  font: normal 14px/16px ${defaultFontFamily};
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  ${textButtonStyle};
  color: ${mainColor};
`;

export const CancelButton = styled.button`
  ${textButtonStyle};
  color: ${greyFontColor};
`;
