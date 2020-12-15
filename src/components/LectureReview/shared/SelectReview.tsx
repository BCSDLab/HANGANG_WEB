import React from 'react';
import { ReviewButton } from './SelectReviewStyle';

type PropType = {
  metadata: string;
  selected: boolean;
  largeWidth?: boolean;
};

const SelectReview = ({ metadata, selected, largeWidth }: PropType) => {
  return (
    <ReviewButton selected={selected} largeWidth={largeWidth}>
      {metadata}
    </ReviewButton>
  );
};
export default SelectReview;
