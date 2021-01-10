import React from 'react';
import DownArrowSVG from '@assets/svg/chevron-down.svg';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import { SemesterBorder, SemesterText } from './Semester.style';

const Semester = () => (
  <div>
    <ReviewTitle title="수강학기" />
    <SemesterBorder>
      <SemesterText>2020년 1학기</SemesterText>
      <DownArrowSVG />
    </SemesterBorder>
  </div>
);

export default Semester;
