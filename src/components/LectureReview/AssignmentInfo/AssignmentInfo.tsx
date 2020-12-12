import React, { useState } from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';

const AssignmentInfo = () => {
  const [checkValue] = useState([
    { id: 1, value: '팀플' },
    { id: 2, value: '레포트' },
    { id: 3, value: '토론' },
    { id: 4, value: '퀴즈' },
  ]);
  return (
    <section>
      <ReviewTitle title="과제정보" />
      {checkValue.map((checkValue) => {
        return (
          <SelectReview
            key={checkValue.id}
            metadata={checkValue.value}
            id={checkValue.id}
          />
        );
      })}
    </section>
  );
};

export default AssignmentInfo;
