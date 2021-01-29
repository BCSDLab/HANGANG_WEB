import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import DefaultLayout from '@components/Shared/DefaultLayout';
import LinkWithImageSwiper, { ISwiperItem } from '@components/LecturePages/LectureDetailPage/LinkWithImageSwiper';
import LectureCommentList from '@components/LecturePages/LectureDetailPage/LectureCommentList';
import TimetableInfoSection from '@components/LecturePages/LectureDetailPage/TimetableInfoSection';
import RateBarChart from '@components/LecturePages/LectureDetailPage/RateBarChart';
import Bottom from '@components/Shared/BottomNav';
import Top from '@components/Shared/TopNav';

// 예시
import { SubOptionButton } from '@components/Shared/TopNav/TopNav.style';
import * as S from './LectureDetailPage.style';

interface IProps {
  lecture: {
    id: string;
    title: string;
    type: string;
    lecturer: string;
    timetable?: Array<{
      timeInfo: string;
      division: number;
    }>
    semester: Array<string>;
    credit: number;
    time?: string;
  }
  material: Array<ISwiperItem>;
}

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  // TODO: Change to Lecture API
  const data = await Promise.resolve({
    id: 'AEB123',
    title: '사랑과 역사',
    type: '교양필수',
    lecturer: '김사랑',
    semester: ['2019-2', '2020-1', '2020-2'],
    timetable: [
      { timeInfo: '월 1A~3B', division: 1 },
      { timeInfo: '화 1A~3B', division: 2 },
      { timeInfo: '수 1A~3B', division: 3 },
    ],
    credit: 22,
    material: Array.from({ length: 7 }).map((_, index) => ({
      to: `materials/${index}`,
      src: '/dummy.png',
      description: '사랑의 역사 필요하신 분',
    })),
  });

  return {
    props: {
      lecture: {
        id: data.id,
        title: data.title,
        type: data.type,
        lecturer: data.lecturer,
        timetable: data.timetable,
        semester: data.semester,
        credit: data.credit,
      },
      material: [],
    },
  };
};

const LectureDetailPage: NextPage<IProps> = ({
  lecture,
  material,
}) => (
  <DefaultLayout>
    <S.DetailInfoContainer>
      <S.DetailInfoFirstRow>
        <S.LectureTitle>{lecture.title}</S.LectureTitle>
        <S.LectureCode>{lecture.id}</S.LectureCode>
        <S.LectureType>{lecture.type}</S.LectureType>
      </S.DetailInfoFirstRow>
      <S.LectureProfessor>
        {lecture.lecturer}
      </S.LectureProfessor>
      <S.DetailInfoLastRow>
        <S.OpeningSemesterDesc>
          개설학기
          <S.OpeningSemester>{lecture.semester.join(', ')}</S.OpeningSemester>
        </S.OpeningSemesterDesc>
        <S.BookmarkButton aria-pressed={false}>
          <S.BookmarkIcon />
        </S.BookmarkButton>
      </S.DetailInfoLastRow>
    </S.DetailInfoContainer>
    <TimetableInfoSection credit={lecture.credit} timetable={lecture.timetable} />
    <S.EvaluationInfoContainer>
      <S.EvaluationInfoTitle>종합 평가</S.EvaluationInfoTitle>
      <RateBarChart />
      <S.EvaluationText>
        <S.EvaluationContainer>
          <S.EvaluationDesc>출첵빈도</S.EvaluationDesc>
          상
        </S.EvaluationContainer>
        <S.EvaluationContainer>
          <S.EvaluationDesc>시험 난이도</S.EvaluationDesc>
          상
        </S.EvaluationContainer>
        <S.EvaluationContainer>
          <S.EvaluationDesc>과제량</S.EvaluationDesc>
          중
        </S.EvaluationContainer>
        <S.EvaluationContainer>
          <S.EvaluationDesc>성적비율</S.EvaluationDesc>
          후하게 주심
        </S.EvaluationContainer>
        <S.HashTagContainer>
          <S.HashTag># 그저그러함</S.HashTag>
          <S.HashTag># 그저그러함</S.HashTag>
          <S.HashTag># 그저그러함</S.HashTag>
        </S.HashTagContainer>
      </S.EvaluationText>
    </S.EvaluationInfoContainer>
    <S.MaterialListContainer>
      <S.MaterialListTitle>강의자료 추천</S.MaterialListTitle>
      <LinkWithImageSwiper itemsData={material} noItemText="등록된 강의자료가 없습니다." />
    </S.MaterialListContainer>
    <LectureCommentList />
    <Bottom />
    <Top
      title="로그인"
      Metadata={(
        <SubOptionButton onClick={() => {
          // do something
        }}
        >
          작성
        </SubOptionButton>
    )}
      progress={75}
    />
  </DefaultLayout>
);

export default LectureDetailPage;
