import React from 'react';
import { useRouter } from 'next/router';
import {
  NavOption, HighlightLine, Description, Icon,
} from './BottomNav.style';

type PropType = {
  title: string;
  path: string;
  svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
};

const EachOption: React.FC<PropType> = ({ title, path, svg }) => {
  const router = useRouter();

  const goUrl = () => {
    router.push(path);
  };

  return (
    <NavOption onClick={goUrl}>
      <HighlightLine selected={path === router.pathname} />
      <Icon as={svg} selected={path === router.pathname} />
      <Description selected={path === router.pathname}>{title}</Description>
    </NavOption>
  );
};

export default EachOption;
