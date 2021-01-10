import React from 'react';
import { ReviewLabel, ReviewInput } from './SelectReview.style';

type PropType = {
  largeWidth?: boolean;
  isSelected : boolean;
  reviewData: { id: number; value: string };
  onSelect: (id: number) => void;
};

const SelectReview = ({
  largeWidth, isSelected, reviewData, onSelect,
}: PropType) => {
  const selectOption = () => {
    onSelect(reviewData.id);
  };

  return (
    <ReviewLabel
      onChange={selectOption}
      selected={isSelected}
      largeWidth={largeWidth}
    >
      <ReviewInput type="checkbox" />
      {reviewData.value}
    </ReviewLabel>
  );
};
export default SelectReview;
