import * as React from 'react';
import DownArrowSVG from 'public/chevron-down.svg';
import { SemesterBorder, SemesterText } from './SemesterStyle';

const Semester = () => {
  return (
    <section>
      <h3>수강학기</h3>
      <SemesterBorder>
        <SemesterText>2020년 1학기</SemesterText>
        <DownArrowSVG />
      </SemesterBorder>
    </section>
  );
};

export default Semester;
