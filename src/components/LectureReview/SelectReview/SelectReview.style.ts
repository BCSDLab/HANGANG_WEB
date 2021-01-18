import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  selected: boolean;
  largeWidth?: boolean;
};

export const ReviewLabel = styled.label<StylePropType>`
  display:inline-block;
  width: ${({ largeWidth }) => (largeWidth ? '30%' : '64px')};
  height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 25px;
  border: none;
  background-color: ${({ selected }) => (selected ? style.mainColor : style.greyBackgroundColor)};
  color: ${({ selected }) => (selected ? style.whiteColor : style.mainFontColor)};
  font-size: 14px;
  font-family: ${style.defaultFontFamily};
  outline: none;
  cursor: pointer;
  text-align: center;
  line-height: 32px;
`;

export const ReviewInput = styled.input`
  display: none;
`;
