import React from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';

type PropType = {
  metadata: { id: number; value: string; selected: boolean }[];
};

const CheckFrequency = ({ metadata }: PropType) => {
  return (
    <section>
      <ReviewTitle title="출첵빈도" />
      {metadata.map((data) => {
        return (
          <SelectReview
            key={data.id}
            metadata={data.value}
            selected={data.selected}
          />
        );
      })}
    </section>
  );
};

export default CheckFrequency;
