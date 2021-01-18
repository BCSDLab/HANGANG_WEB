import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  isComplete : boolean;
}

const SubmitButton = styled.button<StylePropType>`
  display: block;
  width: calc(100% - 32px);
  height: 40px;
  margin: auto;
  margin-top : 24px;
  margin-bottom : 40px;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 24px;
  font-size: 14px;
  background-color: ${({ isComplete }) => (isComplete ? style.mainColor : style.disabledBackgroundColor)};
  color: ${style.whiteColor};
  cursor: ${({ isComplete }) => (isComplete ? 'pointer' : 'default')};

`;

export default SubmitButton;
