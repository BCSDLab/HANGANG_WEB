import React, { useState } from 'react';
import AssignmentAmount from '../../components/LectureReview/AssignmentAmount/AssignmentAmount';
import AssignmentInfo from '../../components/LectureReview/AssignmentInfo/AssignmentInfo';
import CheckFrequency from '../../components/LectureReview/CheckFrequency/CheckFrequency';
import GradeRatio from '../../components/LectureReview/GradeRatio/GradeRatio';
import HashTag from '../../components/LectureReview/HashTag/HashTag';
import Semester from '../../components/LectureReview/Semester/Semester';
import TestDifficulty from '../../components/LectureReview/TestDifficulty/TestDifficulty';
import TotalReview from '../../components/LectureReview/TotalReview/TotalReview';
import Comment from '../../components/LectureReview/Comment/Comment';
const LectureReview = () => {
  const [reviewState, setReviewState] = useState({
    checkFrequency: [
      { id: 1, value: '상', selected: true },
      { id: 2, value: '중', selected: false },
      { id: 3, value: '하', selected: false },
    ],
    assignmentInfo: [
      { id: 1, value: '팀플', selected: true },
      { id: 2, value: '레포트', selected: false },
      { id: 3, value: '토론', selected: false },
      { id: 4, value: '퀴즈', selected: false },
    ],
    assignmentAmount: [
      { id: 1, value: '상', selected: true },
      { id: 2, value: '중', selected: false },
      { id: 3, value: '하', selected: false },
    ],
    testDifficulty: [
      { id: 1, value: '상', selected: true },
      { id: 2, value: '중', selected: false },
      { id: 3, value: '하', selected: false },
    ],
    gradeRatio: [
      { id: 1, value: '후하게주심', selected: true },
      { id: 2, value: '적당히주심', selected: false },
      { id: 3, value: '아쉽게주심', selected: false },
    ],
    hashTag: [
      { id: 1, value: '#그저그러함', selected: true },
      { id: 2, value: '#학점왤케짜', selected: false },
      { id: 3, value: '#리얼수면제', selected: false },
      { id: 4, value: '#수업개빡셈', selected: false },
      { id: 5, value: '#배운거많음', selected: false },
      { id: 6, value: '#좋은교수님', selected: false },
      { id: 7, value: '#진심꿀과목', selected: false },
      { id: 8, value: '#이거듣지마', selected: false },
      { id: 9, value: '#조금아쉬움', selected: false },
    ],
    totalReview: [
      { id: 1, value: 'full' },
      { id: 2, value: 'full' },
      { id: 3, value: 'full' },
      { id: 4, value: 'half' },
      { id: 5, value: 'empty' },
    ],
  });
  return (
    <>
      <Semester />
      <CheckFrequency metadata={reviewState.checkFrequency} />
      <AssignmentInfo metadata={reviewState.assignmentInfo} />
      <AssignmentAmount metadata={reviewState.assignmentAmount} />
      <TestDifficulty metadata={reviewState.testDifficulty} />
      <GradeRatio metadata={reviewState.gradeRatio} />
      <HashTag metadata={reviewState.hashTag} />
      <TotalReview metadata={reviewState.totalReview} />
      <Comment />
    </>
  );
};

export default LectureReview;
