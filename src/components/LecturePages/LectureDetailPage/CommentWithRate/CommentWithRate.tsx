import React from 'react';

import * as S from '@components/LecturePages/LectureDetailPage/CommentWithRate/CommentWithRate.style';

interface IProps {
  title: string;
  subInfoDesc: string;
  action?: React.ReactNode;
}

const CommentWithRate: React.FC<IProps> = ({
  title,
  subInfoDesc,
  action,
  children,
}) => (
  <S.Container>
    <S.FirstRow>
      <S.Title>
        { title }
      </S.Title>
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
