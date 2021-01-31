import React from 'react';
import { SubOptionButton } from './Header.style';

type PropType ={
  subOptionClick : () => void;
}
const HeaderButton: React.FC<PropType> = ({ subOptionClick, children }) => (
  <SubOptionButton onClick={subOptionClick}>{children}</SubOptionButton>
);

export default HeaderButton;
