import React from 'react';
import * as S from './Input.style';

export type InputRef = {
  value: unknown;
};

interface IProps {
  type?: string;
  fill?: boolean;
  placeholder?: string;
  Suffix?: React.ReactNode;
}

const Input: React.ForwardRefRenderFunction<InputRef, IProps> = ({
  type = 'text',
  placeholder,
  fill = false,
  Suffix,
}, ref) => {
  const [inputValue, setInputValue] = React.useState();
  React.useImperativeHandle(ref, () => ({
    value: inputValue,
  }), [inputValue]);

  return (
    <S.InputWrapper $fill={fill}>
      <S.InputBase
        type={type}
        placeholder={placeholder}
      />
      <S.SuffixWrapper>
        {Suffix || null}
      </S.SuffixWrapper>
    </S.InputWrapper>
  );
};

export default React.forwardRef(Input);
