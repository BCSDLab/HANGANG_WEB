import styled from 'styled-components';
import { ColorName, defaultFontFamily, FormInputSize, isColorName, whiteColor } from '@utils/css-util';

interface ButtonProps {
  color: string;
  $fill: boolean;
  $size: 'sm' | 'md' | 'lg';
  disabled: boolean;
}

export const ButtonChildren = styled.span`
  font: 14px ${defaultFontFamily};
  line-height: inherit;
  color: ${whiteColor};
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: calc(${(props) => (FormInputSize[props.$size].button)} / 2);
  width: ${(props) => (props.$fill ? '100%' : 'unset')};
  height: ${(props) => (FormInputSize[props.$size].button)};
  line-height: ${(props) => (FormInputSize[props.$size].button)};
  background-color: ${(props) => (isColorName(props.color) ? ColorName[props.color].backgroundColor : props.color)};
  :disabled {
    
  }
`;

