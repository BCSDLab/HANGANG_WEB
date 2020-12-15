import React, { useState } from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import SelectReview from '../shared/SelectReview';

type PropType = {
  metadata: { id: number; value: string; selected: boolean }[];
};

const AssignmentInfo = ({ metadata }: PropType) => {
  return (
    <section>
      <ReviewTitle title="과제정보" />
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

export default AssignmentInfo;
