import React from 'react';
import DownArrowSVG from 'public/chevron-down.svg';
import { SemesterBorder, SemesterText } from './SemesterStyle';
import ReviewTitle from '../shared/ReviewTitle';

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
