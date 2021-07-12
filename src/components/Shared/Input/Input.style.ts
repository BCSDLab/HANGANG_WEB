import styled from 'styled-components';
import {
  defaultFontFamily,
  greyBackgroundColor,
  mainColor,
  mainFontColor,
} from '@utils/css-util';

interface InputWrapperProps {
  $fill?: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  padding: 0 2px;
  width: ${(props) => (props.$fill ? '100%' : 'unset')};
  color: ${mainFontColor};
  font: 14px/21px ${defaultFontFamily};
  
  ::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    border-bottom: 1px solid ${greyBackgroundColor};
    content: '';
  }
  :focus-within::after {
    border-bottom: 1px solid ${mainColor};
  }
`;

export const InputBase = styled.input`
  flex: 1 1 auto;
  padding: 0;
  border: 0;
  font: 14px/21px ${defaultFontFamily};
  outline: 0;
  
  :focus {
    border: 0;
  }
`;

export const SuffixWrapper = styled.span`
`;
