import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  selected: boolean;
  largeWidth?: boolean;
};

export const ReviewLabel = styled.label<StylePropType>`
  display:inline-block;
  width: ${({ largeWidth }) => (largeWidth ? '30%' : '104px')};
  height: 45px;
  margin: 16px 8px 32px 8px;
  border-radius: 25px;
  border: none;
  background-color: ${({ selected }) => (selected ? style.mainColor : style.greyBackgroundColor)};
  color: ${({ selected }) => (selected ? style.whiteColor : style.mainFontColor)};
  font-size: 18px;
  font-family: ${style.defaultFontFamily};
  outline: none;
  cursor: pointer;
  text-align: center;
  line-height: 45px;
`;

export const ReviewInput = styled.input`
  display: none;
`;
