import React from 'react';
import {
  TopNavContainer, BackButton, LeftIcon, TopNavTitle, SubOptionButton,
} from './TopNav.style';

const TopNav: React.FC = ({ children }) => (
  <TopNavContainer>
    <BackButton>
      <LeftIcon />
    </BackButton>
    <TopNavTitle>{children}</TopNavTitle>
    {children === '스크랩' && <SubOptionButton>편집</SubOptionButton>}
    {children === '강의평' && <SubOptionButton>작성</SubOptionButton>}
  </TopNavContainer>
);

export default TopNav;
