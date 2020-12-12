import React, { useState } from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';

const CheckFrequency = () => {
  const [checkValue] = useState([
    { id: 1, value: '상' },
    { id: 2, value: '중' },
    { id: 3, value: '하' },
  ]);
  return (
    <section>
      <ReviewTitle title="출첵빈도" />
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

export default CheckFrequency;
