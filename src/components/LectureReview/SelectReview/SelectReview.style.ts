import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  selected: boolean;
  largeWidth?: boolean;
};

export const ReviewButton = styled.button<StylePropType>`
  width: ${({ largeWidth }) => {
    if (largeWidth) return '154px';
    return '104px';
  }};
  height: 32px;
  margin: 16px 0 32px 16px;
  border-radius: 20px;
  border: none;
  background-color: ${({ selected }) => {
    if (selected) return style.mainColor;
    return style.greyBackgroundColor;
  }};
  color: ${({ selected }) => {
    if (selected) return style.whiteColor;
    return style.mainFontColor;
  }};
  font-size: ${style.fontSize};
  font-family: ${style.defaultFontFamily};
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;
