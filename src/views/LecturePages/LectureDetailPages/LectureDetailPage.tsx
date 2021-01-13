import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import DefaultLayout from '@components/Shared/DefaultLayout/DefaultLayout';
import LinkWithImageSwiper, { ISwiperItem } from '@components/LecturePages/LectureDetailPage/LinkWithImageSwiper/LinkWithImageSwiper';
import * as S from '@views/LecturePages/LectureDetailPages/LectureDetailPage.style';
import DownPointingPathSVG from '@assets/svg/down_pointing_path.svg';
import LectureCommentList from '@components/LecturePages/LectureDetailPage/LectureCommentList/LectureCommentList';

interface IProps {
  lecture: {
    id: string;
    title: string;
    type: string;
    lecturer: string;
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
        <S.BookmarkButton>
          <S.BookmarkIcon />
        </S.BookmarkButton>
      </S.DetailInfoLastRow>
    </S.DetailInfoContainer>
    <S.TimetableInfoContainer>
      <S.TimetableTitle>
        시간표 정보
      </S.TimetableTitle>
      {lecture.credit ? ( // TODO: change to fit API
        <S.TimetableInfo>
          <S.TimetableInfoContent>
            <S.TimetableInfoContentRow>
              <S.TimetableInfoContentTitle>학점</S.TimetableInfoContentTitle>
              {lecture.credit}
              학점
            </S.TimetableInfoContentRow>
            <S.TimetableInfoContentRow>
              <S.TimetableInfoContentTitle>시간</S.TimetableInfoContentTitle>
              분반과 시간을 확인하세요.
            </S.TimetableInfoContentRow>
          </S.TimetableInfoContent>
          <S.TimetableInfoToggleButton>
            <DownPointingPathSVG />
          </S.TimetableInfoToggleButton>
        </S.TimetableInfo>
      ) : <S.TimetableEmptyInfo>시간표 정보가 없습니다</S.TimetableEmptyInfo>}
    </S.TimetableInfoContainer>
    <S.EvaluationInfoContainer>
      <S.EvaluationInfoTitle>종합 평가</S.EvaluationInfoTitle>
      <S.EvaluationGraphContainer>.</S.EvaluationGraphContainer>
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
  </DefaultLayout>
);

export default LectureDetailPage;
