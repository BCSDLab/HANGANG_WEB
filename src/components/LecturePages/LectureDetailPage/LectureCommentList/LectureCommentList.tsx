import React from 'react';

import * as S from '@components/LecturePages/LectureDetailPage/LectureCommentList/LectureCommentList.style';
import CommentWithRate from '@components/LecturePages/LectureDetailPage/CommentWithRate/CommentWithRate';

const sortTypeList = ['좋아요 순', '최신 순'] as const;
type SortType = typeof sortTypeList[number];

const isSortType = (s: string): s is SortType => s === sortTypeList[0] || s === sortTypeList[1];

const useSortWithSelect = () => {
  const [sortType, setSortType] = React.useState<SortType>(sortTypeList[0]);
  const handleChangeSortTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target: { value } } = e;
    setSortType(isSortType(value) ? value as SortType : sortTypeList[0]);
  };
  return { sortType, handleChangeSortTypeSelect };
};

const tempSemester = '2020-1';

type Semester = string; // TODO: Change

function isSemester(str: string): str is Semester {
  const parsedNumber = str.split('-').map((value) => Number(value));
  return !(parsedNumber.length !== 2
    && Number.isNaN(parsedNumber[0])
    && !(parsedNumber[1] in [1, 2]));
}

function parseSemester(s: Semester): string {
  if (!isSemester(s)) return '';
  const parsedNumber = s.split('-').map((value) => Number(value));
  return `${parsedNumber[0]}년 ${parsedNumber[1]}학기 수강자`;
}

const LectureCommentList: React.FC = () => {
  const { sortType, handleChangeSortTypeSelect } = useSortWithSelect();
  return (
    <S.SectionContainer>
      <S.TitleRow>
        <S.Title>개인 평가 ()</S.Title>
        <S.SelectContainer>
          <S.Select value={sortType} onChange={handleChangeSortTypeSelect}>
            <S.Option>좋아요 순</S.Option>
            <S.Option>최신 순</S.Option>
          </S.Select>
          <S.SelectorIconContainer>
            <S.SelectorIcon />
          </S.SelectorIconContainer>
        </S.SelectContainer>
      </S.TitleRow>
      <CommentWithRate
        title={isSemester(tempSemester) ? parseSemester(tempSemester) : ''}
        subInfoDesc="과제정보"
        action={(
          <S.CommentActionRow>
            <S.LikeButton pressed>
              <S.ThumbUpIcon />
              42
            </S.LikeButton>
            <S.ReportButton>신고</S.ReportButton>
          </S.CommentActionRow>
        )}
      >
        좋습니다.
      </CommentWithRate>
    </S.SectionContainer>
  );
};

export default LectureCommentList;
