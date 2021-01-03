import React from 'react';
import DownArrowSVG from '@assets/svg/chevron-down.svg';
import { SemesterBorder, SemesterText } from './Semester.style';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';

const Semester = () => {
  return (
    <section>
      <ReviewTitle title="수강학기" />
      <SemesterBorder>
        <SemesterText>2020년 1학기</SemesterText>
        <DownArrowSVG />
      </SemesterBorder>
    </section>
  );
};

export default Semester;
