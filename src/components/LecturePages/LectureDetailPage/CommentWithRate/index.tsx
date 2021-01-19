import React from 'react';

import RateDisplay from '@components/Shared/RateDisplay';
import * as S from './CommentWithRate.style';

interface IProps {
  title: string;
  rate: number;
  subInfoDesc: string;
  action?: React.ReactNode;
}

const CommentWithRate: React.FC<IProps> = ({
  title,
  rate,
  subInfoDesc,
  action,
  children,
}) => (
  <S.Container>
    <S.FirstRow>
      <S.Title>
        { title }
      </S.Title>
      <RateDisplay rate={rate} />
    </S.FirstRow>
    <S.Row>
      <S.RowDesc>{subInfoDesc}</S.RowDesc>
      팀플,레포트,퀴즈,토론
    </S.Row>
    <S.Content>
      {children}
    </S.Content>
    {action || null}
  </S.Container>
);

export default CommentWithRate;
