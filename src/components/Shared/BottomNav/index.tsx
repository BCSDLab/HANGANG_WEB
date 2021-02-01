import React from 'react';
import HomeSVG from '@assets/svg/home.svg';
import ClipBoardCheckSVG from '@assets/svg/clipboard-check.svg';
import DocumentTextSVG from '@assets/svg/document-text.svg';
import TemplateSVG from '@assets/svg/template.svg';
import UserSVG from '@assets/svg/user.svg';
import { useRouter } from 'next/router';
import EachOption from './EachOption';
import { NavContainer } from './BottomNav.style';

const options = [
  { title: '홈', path: '/', svg: HomeSVG },
  { title: '강의평', path: '/lectures', svg: ClipBoardCheckSVG },
  { title: '강의자료', path: '/materials', svg: DocumentTextSVG },
  { title: '시간표', path: '/timetables', svg: TemplateSVG },
  { title: '마이페이지', path: '/mypage', svg: UserSVG },
];

const BottomNav : React.FC = () => {
  const router = useRouter();
  const goUrl = (path: string) => () => {
    router.push(path);
  };

  return (
    <NavContainer>
      {options.map((option) => (
        <EachOption
          key={option.title}
          title={option.title}
          svg={option.svg}
          selected={router.pathname === option.path}
          goUrl={goUrl(option.path)}
        />
      ))}
    </NavContainer>
  );
};

export default BottomNav;
