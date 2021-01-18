import React from 'react';
import styled, { css } from 'styled-components';
import { defaultFontFamily, mainFontColor, mobileQuery } from '@utils/css-util';
import DownPointingSVG from '@assets/svg/down_pointing_path.svg';

const ContainerStyle = {
  sm: 24,
  md: 32,
  lg: 40,
};

interface IOptionContainer {
  isFilled: boolean;
}

const OptionContainer = styled.select<IOptionContainer>`
  height: 100%;
  ${(props) => (props.isFilled ? css`
    flex: 1 1 auto;
    width: 100%;
  ` : null)};
  ${mobileQuery} {
    border: 0;
    font: normal 12px ${defaultFontFamily};
    color: ${mainFontColor};
    appearance: none;
  }
`;

const Option = styled.option``;

const SelectorIconContainer = styled.span.attrs({
  'aria-hidden': 'true',
})`
  display: inline-block;
  position: absolute;
  top: 6px;
  right: 0;
  width: 12px;
  height: 12px;
  margin: 0;
  padding: 0;
`;

type Size = 'sm' | 'md' | 'lg';
type InputVariant = 'default' | 'borderless' | 'outlined';
interface ISelectContainer {
  isFilled: boolean;
  size: Size;
  variant: InputVariant;
}

const SelectContainer = styled.div<ISelectContainer>`
  display: flex;
  align-items: center;
  position: relative;
  height: ${(props) => ContainerStyle[props.size]}px;
  cursor: pointer;


  ${(props) => (props.isFilled ? css`
    flex: 1 1 auto;
    width: 100%;
  ` : null)};
  ${OptionContainer} {
    padding-right: ${(props) => ContainerStyle[props.size] / 2}px;
    font-size: ${(props) => ContainerStyle[props.size] / 2}px;
    line-height: ${(props) => ContainerStyle[props.size]}px;
  }
  ${SelectorIconContainer} {
    width: ${(props) => ContainerStyle[props.size] / 2}px;
    height: ${(props) => ContainerStyle[props.size] / 2}px;
  }
`;

const SelectorIcon = styled(DownPointingSVG)`
  > path {
    stroke: ${mainFontColor};
    stroke-width: 2px;
  }
  ${mobileQuery} {
    display: block;
  }
`;

export type OptionProps = string | { label?: string; disabled?: boolean; value?: string | number };

interface IProps {
  size?: Size;
  variant?: InputVariant;
  fill?: boolean;
  value?: string | number;
  options?: OptionProps[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const renderOption = (o: OptionProps, i: number) => {
  if (typeof o === 'string') {
    return (
      <Option key={i} value={o}>
        {o}
      </Option>
    );
  }
  return (
    <Option disabled={o.disabled || false} key={i} value={o.value}>
      {o.label}
    </Option>
  );
};

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, IProps> = ({
  size = 'sm',
  variant = 'default',
  value,
  fill = false,
  options,
  onChange,
}, ref) => (
  <SelectContainer isFilled={fill} size={size} variant={variant}>
    <OptionContainer value={value} onChange={onChange} ref={ref} isFilled={fill}>
      {options ? options.map(renderOption) : null}
    </OptionContainer>
    <SelectorIconContainer>
      <SelectorIcon />
    </SelectorIconContainer>
  </SelectContainer>
);

export default React.forwardRef(Select);
