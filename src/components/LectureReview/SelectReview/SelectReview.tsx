import React, { memo } from 'react';
import { ReviewButton } from './SelectReview.style';

type PropType = {
  largeWidth?: boolean;
  reviewData: { id: number; value: string; selected: boolean };
  onSelect: (metadata: {
    id: number;
    value: string;
    selected: boolean;
  }) => void;
};

const SelectReview = memo(({ largeWidth, reviewData, onSelect }: PropType) => {
  const selectOption = () => {
    onSelect(reviewData);
  };
  console.log('SelectReview Update');
  return (
    <ReviewButton
      onClick={selectOption}
      selected={reviewData.selected}
      largeWidth={largeWidth}
    >
      {reviewData.value}
    </ReviewButton>
  );
});
export default SelectReview;
