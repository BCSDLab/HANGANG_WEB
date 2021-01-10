import React from 'react';
import { ReviewLabel, ReviewInput } from './SelectReview.style';

type PropType = {
  largeWidth?: boolean;
  isSelected : boolean;
  reviewData: { id: number; value: string };
  onSelect: (id: number) => void;
};

const SelectReview : React.FC<PropType> = ({
  largeWidth, isSelected, reviewData, onSelect,
}) => {
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
