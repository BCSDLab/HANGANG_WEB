import React, { useRef } from 'react';
import Semester, {
  SemesterRefType,
} from '@components/LectureReview/Semester/Semester';
import AssignmentAmount, {
  AssignmentAmountRefType,
} from '@components/LectureReview/AssignmentAmount/AssignmentAmount';
import AssignmentInfo, {
  AssignmentInfoRefType,
} from '@components/LectureReview/AssignmentInfo/AssignmentInfo';
import CheckFrequency, {
  CheckFrequencyRefType,
} from '@components/LectureReview/CheckFrequency/CheckFrequency';
import GradeRatio, {
  GradeRatioRefType,
} from '@components/LectureReview/GradeRatio/GradeRatio';
import HashTag, {
  HashTagRefType,
} from '@components/LectureReview/HashTag/HashTag';
import TestDifficulty, {
  TestDifficultyRefType,
} from '@components/LectureReview/TestDifficulty/TestDifficulty';
import TotalReview, {
  TotalRefType,
} from '@components/LectureReview/TotalReview/TotalReview';
import Header from '@components/Shared/Header';
import HeaderButton from '@components/Shared/Header/HeaderButton';
import BottomNav from '@components/Shared/BottomNav';

const LectureReview: React.FC = () => {
  const semesterRef = useRef<SemesterRefType>(null);
  const checkFrequencyRef = useRef<CheckFrequencyRefType>(null);
  const assignmentInfoRef = useRef<AssignmentInfoRefType>(null);
  const assignmentAmountRef = useRef<AssignmentAmountRefType>(null);
  const testDifficultyRef = useRef<TestDifficultyRefType>(null);
  const gradeRatioRef = useRef<GradeRatioRefType>(null);
  const hashTagRef = useRef<HashTagRefType>(null);
  const totalRef = useRef<TotalRefType>(null);

  // console 은 back으로 데이터전달
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (totalRef.current?.commentReview === '') return false;
    // console.log(semesterRef);
    // console.log(checkFrequencyRef);
    // console.log(assignmentInfoRef);
    // console.log(assignmentAmountRef);
    // console.log(testDifficultyRef);
    // console.log(gradeRatioRef);
    // console.log(hashTagRef);
    // console.log(totalRef);
    return true;
  };

  return (
    <form onSubmit={submit}>
      <Header
        title="내 스크랩"
        subButton={(
          <HeaderButton subOptionClick={() => {
            // console.log('clicked'); //doing something
          }}
          >
            수정
          </HeaderButton>
      )}
      />
      <BottomNav />
      <Semester ref={semesterRef} />
      <CheckFrequency ref={checkFrequencyRef} />
      <AssignmentInfo ref={assignmentInfoRef} />
      <AssignmentAmount ref={assignmentAmountRef} />
      <TestDifficulty ref={testDifficultyRef} />
      <GradeRatio ref={gradeRatioRef} />
      <HashTag ref={hashTagRef} />
      <TotalReview ref={totalRef} />
    </form>
  );
};

export default LectureReview;
