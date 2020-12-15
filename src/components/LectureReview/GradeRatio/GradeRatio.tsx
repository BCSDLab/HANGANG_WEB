import React from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';

type PropType = {
  metadata: { id: number; value: string; selected: boolean }[];
};

const GradeRatio = ({ metadata }: PropType) => {
  return (
    <section>
      <ReviewTitle title="성적비율" />
      {metadata.map((data) => {
        return (
          <SelectReview
            key={data.id}
            metadata={data.value}
            selected={data.selected}
            largeWidth={true}
          />
        );
      })}
    </section>
  );
};

export default GradeRatio;
