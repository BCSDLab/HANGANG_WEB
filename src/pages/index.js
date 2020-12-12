import * as React from 'react';
import Semester from '../components/LectureReview/Semester/Semester';
import CheckFrequency from '../components/LectureReview/CheckFrequency/CheckFrequency';
import AssignmentInfo from '../components/LectureReview/AssignmentInfo/AssignmentInfo';

const index = (props) => {
  return (
    <>
      <Semester></Semester>
      <CheckFrequency />
      <AssignmentInfo />
    </>
  );
};

export default index;
