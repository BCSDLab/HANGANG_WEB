import React from 'react';
import {NavContainer, NavOption, HighlightLine, HomeIcon, ClipBoardCheckIcon, DocumentTextIcon, TemplateIcon, UserIcon, Description} from './BottomNav.style';

const BottomNav = () =>  (
    <NavContainer>
        <NavOption>
          <HighlightLine />
          <HomeIcon />
          <Description>홈</Description>
        </NavOption>
        <NavOption>
          <HighlightLine />
          <ClipBoardCheckIcon />
          <Description>강의평</Description>
        </NavOption>
        <NavOption>
          <HighlightLine />
          <DocumentTextIcon />
          <Description>강의자료</Description>
        </NavOption>
        <NavOption>
          <HighlightLine />
          <TemplateIcon />
          <Description>시간표</Description>
        </NavOption>
        <NavOption>
          <HighlightLine />
          <UserIcon />
          <Description>마이페이지</Description>
        </NavOption>
    </NavContainer>
    )


export default BottomNav;