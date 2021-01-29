import React from 'react';
import HomeSVG from '@assets/svg/home.svg';
import ClipBoardCheckSVG from '@assets/svg/clipboard-check.svg';
import DocumentTextSVG from '@assets/svg/document-text.svg';
import TemplateSVG from '@assets/svg/template.svg';
import UserSVG from '@assets/svg/user.svg';
import EachOption from './EachOption';
import { NavContainer } from './BottomNav.style';

const options = [
  { title: '홈', path: '/', svg: HomeSVG },
  { title: '강의평', path: '/lectures', svg: ClipBoardCheckSVG },
  { title: '강의자료', path: '/materials', svg: DocumentTextSVG },
  { title: '시간표', path: '/timetables', svg: TemplateSVG },
  { title: '마이페이지', path: '/mypage', svg: UserSVG },
];

const BottomNav : React.FC = () => (
  <NavContainer>
    {options.map((option) => (
      <EachOption
        key={option.title}
        title={option.title}
        path={option.path}
        svg={option.svg}
      />
    ))}
  </NavContainer>
);

export default BottomNav;
