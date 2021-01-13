import React from 'react';
import { ReviewLabel, ReviewInput } from './SelectReview.style';

type PropType = {
  largeWidth?: boolean;
  isSelected : boolean;
  reviewId: number;
  onSelect: (id: number) => void;
};

const SelectReview : React.FC<PropType> = ({
  largeWidth, isSelected, reviewId, onSelect, children,
}) => (
  <ReviewLabel
    selected={isSelected}
    largeWidth={largeWidth}
  >
    <ReviewInput
      type="checkbox"
      value={reviewId}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onSelect(+e.target.value);
      }}
    />
    {children}
  </ReviewLabel>
);
export default SelectReview;
