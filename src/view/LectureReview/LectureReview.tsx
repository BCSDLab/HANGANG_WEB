import React, { useRef } from 'react';
import AssignmentAmount, {
  assignmentAmountRefType,
} from '@components/LectureReview/AssignmentAmount/AssignmentAmount';
import AssignmentInfo, {
  assignmentInfoRefType,
} from '@components/LectureReview/AssignmentInfo/AssignmentInfo';
import CheckFrequency, {
  checkFrequencyRefType,
} from '@components/LectureReview/CheckFrequency/CheckFrequency';
import GradeRatio, {
  gradeRatioRefType,
} from '@components/LectureReview/GradeRatio/GradeRatio';
import HashTag, {
  hashTagRefType,
} from '@components/LectureReview/HashTag/HashTag';
import Semester from '@components/LectureReview/Semester/Semester';
import TestDifficulty, {
  testDifficultyRefType,
} from '@components/LectureReview/TestDifficulty/TestDifficulty';
import TotalReview from '@components/LectureReview/TotalReview/TotalReview';

const LectureReview = () => {
  const checkFrequencyRef = useRef<checkFrequencyRefType>(null);
  const assignmentInfoRef = useRef<assignmentInfoRefType>(null);
  const assignmentAmountRef = useRef<assignmentAmountRefType>(null);
  const testDifficultyRef = useRef<testDifficultyRefType>(null);
  const gradeRatioRef = useRef<gradeRatioRefType>(null);
  const hashTagRef = useRef<hashTagRefType>(null);

  console.log(checkFrequencyRef);
  console.log(assignmentInfoRef);
  console.log(assignmentAmountRef);
  console.log(testDifficultyRef);
  console.log(gradeRatioRef);
  console.log(hashTagRef);
  return (
    <section>
      <Semester />
      <CheckFrequency ref={checkFrequencyRef} />
      <AssignmentInfo ref={assignmentInfoRef} />
      <AssignmentAmount ref={assignmentAmountRef} />
      <TestDifficulty ref={testDifficultyRef} />
      <GradeRatio ref={gradeRatioRef} />
      <HashTag ref={hashTagRef} />
      <TotalReview />
    </section>
  );
};

export default LectureReview;
