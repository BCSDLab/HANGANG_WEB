import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  isComplete : boolean;
}

export const SubmitButton = styled.button<StylePropType>`
  display: block;
  margin: auto;
  margin-top : 30px;
  margin-bottom : 80px;
  width: 528px;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 24px;
  font-size: 18px;
  background-color: ${({ isComplete }) => (isComplete ? style.mainColor : style.disabledBackgroundColor)};
  color: ${style.whiteColor};
  cursor: ${({ isComplete }) => (isComplete ? 'pointer' : 'default')};

`;
