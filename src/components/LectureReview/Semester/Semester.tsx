import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import {
  SemesterContainer, SemesterSelector, SelectOption, SemesterDownArrowSVG,
} from './Semester.style';

export type SemesterRefType = {
  selectedSemester : number;
}

const semester = [
  { id: 1, value: '2020년 1학기' },
  { id: 2, value: '2019년 2학기' },
  { id: 3, value: '2019년 1학기' },
];

const Semester = forwardRef<SemesterRefType>((_props, ref) => {
  const [selectedSemester, setSelectedSemester] = useState(1);

  const select = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(+e.target.value);
    // 이부분은 선택된 '학기'를 다른 리뷰들과 같은형태인 number
    // 즉, id로 전달할지 comment부분과같이 서버로 string을 전달할지
    // 몰라서 일단은 id를 넘기는것으로 하였습니다.
    // 그래서 아래 select tag value속성값에 id값을 준것입니다.
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
