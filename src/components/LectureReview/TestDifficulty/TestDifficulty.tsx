import React from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';
type PropType = {
  metadata: { id: number; value: string; selected: boolean }[];
};

const TestDifficulty = ({ metadata }: PropType) => {
  return (
    <section>
      <ReviewTitle title="시험 난이도" />
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

export default TestDifficulty;
