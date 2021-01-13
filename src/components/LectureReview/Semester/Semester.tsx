import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import {
  SemesterContainer, SemesterSelector, SelectOption, SemesterDownArrowSVG,
} from './Semester.style';

export type SemesterRefType = {
  selectedSemester : string;
}

const semester = [
  { id: 1, value: '2020년 1학기' },
  { id: 2, value: '2019년 2학기' },
  { id: 3, value: '2019년 1학기' },
];

const Semester = forwardRef<SemesterRefType>((_props, ref) => {
  const [selectedSemester, setSelectedSemester] = useState('2020년 1학기');

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(e.target.value);
  };

  useImperativeHandle(ref, () => ({
    selectedSemester,
  }), [selectedSemester]);

  return (
    <>
      <ReviewTitle title="수강학기" />
      <SemesterContainer>
        <SemesterSelector onChange={select}>
          {semester.map((data) => (
            <SelectOption key={data.id} value={data.id}>{data.value}</SelectOption>
          ))}
        </SemesterSelector>
        <SemesterDownArrowSVG />
      </SemesterContainer>
    </>
  );
});

export default Semester;
