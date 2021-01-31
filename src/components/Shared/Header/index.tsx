import React from 'react';
import { useRouter } from 'next/router';
import {
  HeaderContainer,
  BackButton,
  LeftIcon,
  HeaderTitle,
  SubOptionPosition,
  ProgressOuterBar,
  ProgressBar,
} from './Header.style';

type PropType = {
  title : string;
  subButton ?: React.ReactNode;
  progress ?: number;
}

const Header: React.FC<PropType> = ({ title, subButton, progress }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <HeaderContainer>
      <BackButton onClick={goBack}>
        <LeftIcon />
      </BackButton>
      <HeaderTitle>{title}</HeaderTitle>
      <SubOptionPosition>
        {subButton}
      </SubOptionPosition>
      <ProgressOuterBar>
        <ProgressBar progress={progress || 0} />
      </ProgressOuterBar>
    </HeaderContainer>
  );
};

export default Header;
