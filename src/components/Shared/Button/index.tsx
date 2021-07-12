import React from 'react';
import * as S from './Button.style';

interface IProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  fill?: boolean;
  color?: string;
  disabled?: boolean;
}

const Button: React.FC<IProps> = ({
  size = 'md',
  type = 'button',
  color = 'primary',
  fill = false,
  disabled = false,
  children,
}) => (
  <S.Button
    $fill={fill}
    $size={size}
    type={type}
    color={color}
    disabled={disabled}
  >
    <S.ButtonChildren>
      {children}
    </S.ButtonChildren>
  </S.Button>
);

export default Button;
