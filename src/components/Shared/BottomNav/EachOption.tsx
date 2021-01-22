import React from 'react';
import { useRouter } from 'next/router';
import {
  NavOption,
  HighlightLine,
  HomeIcon,
  ClipBoardCheckIcon,
  DocumentTextIcon,
  TemplateIcon,
  UserIcon,
  Description,
} from './BottomNav.style';

type PropType = {
  path : string;
  children : React.ReactNode;
}

const EachOption : React.FC<PropType> = ({ path, children }) => {
  const router = useRouter();
  const onIsNow = () => (path === router.pathname).toString();

  const Icon = () => {
    switch (children) {
      case '홈':
        return <HomeIcon isnow={onIsNow()} />;
      case '강의평':
        return <ClipBoardCheckIcon isnow={onIsNow()} />;
      case '강의자료':
        return <DocumentTextIcon isnow={onIsNow()} />;
      case '시간표':
        return <TemplateIcon isnow={onIsNow()} />;
      case '마이페이지':
        return <UserIcon isnow={onIsNow()} />;
      default:
        throw new Error('적절치 못한 제목입니다.');
    }
  };
  return (
    <NavOption>
      <HighlightLine isnow={onIsNow()} />
      {Icon()}
      <Description isnow={onIsNow()}>{children}</Description>
    </NavOption>
  );
};

export default EachOption;
