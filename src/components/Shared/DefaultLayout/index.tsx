import React from 'react';
import * as S from './DefaultLayout.style';

const DefaultLayout: React.FC = ({ children }) => (
  <>
    <S.MainWrapper>
      {children}
    </S.MainWrapper>
  </>
);

export default DefaultLayout;
