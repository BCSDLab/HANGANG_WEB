import React from 'react';
import {
  NavOption, Description, Icon,
} from './BottomNav.style';

type PropType = {
  title: string;
  svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  selected: boolean;
  goUrl : () => void;
};

const EachOption: React.FC<PropType> = ({
  title, svg, selected, goUrl,
}) => (
  <NavOption onClick={goUrl} $selected={selected}>
    {/* <HighlightLine /> */}
    <Icon as={svg} />
    <Description>{title}</Description>
  </NavOption>
);

export default EachOption;
