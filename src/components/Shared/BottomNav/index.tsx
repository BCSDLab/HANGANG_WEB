import React from 'react';
import { NavContainer } from './BottomNav.style';
import EachOption from './EachOption';

const options = [
  { id: 1, title: '홈', path: '/' },
  { id: 2, title: '강의평', path: '/lectures' },
  { id: 3, title: '강의자료', path: '/materials' },
  { id: 4, title: '시간표', path: '/timetables' },
  { id: 5, title: '마이페이지', path: '/mypage' },
];
// 마이페이지 url은 정해져있지않아 임의로 지정했습니다.

const BottomNav : React.FC = () => (
  <NavContainer>
    {options.map((option) => (
      <EachOption
        key={option.id}
        path={option.path}
      >
        {option.title}
      </EachOption>
    ))}
  </NavContainer>
);

export default BottomNav;
