import React from 'react';
import { useRouter } from 'next/router';
import {
  TopNavContainer,
  BackButton,
  LeftIcon,
  TopNavTitle,
  SubOptionPosition,
  ProgressOuterBar,
  ProgressBar,
} from './TopNav.style';

type PropType = {
  title : string;
  Metadata ?: JSX.Element;
  progress ?: number;
}

const TopNav: React.FC<PropType> = ({ title, Metadata, progress }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <TopNavContainer>
      <BackButton onClick={goBack}>
        <LeftIcon />
      </BackButton>
      <TopNavTitle>{title}</TopNavTitle>
      <SubOptionPosition>
        {Metadata}
      </SubOptionPosition>
      <ProgressOuterBar>
        <ProgressBar progress={progress || 0} />
      </ProgressOuterBar>
    </TopNavContainer>
  );
};

export default TopNav;
