import React from 'react';
import { ReviewLabel, ReviewInput } from './SelectReview.style';

type PropType = {
  largeWidth?: boolean;
  isSelected : boolean;
  onSelect : (e: React.ChangeEvent<HTMLInputElement>) => void;
  reviewId: number;
};

const SelectReview : React.FC<PropType> = ({
  largeWidth, isSelected, onSelect, reviewId, children,
}) => (
  <ReviewLabel
    selected={isSelected}
    largeWidth={largeWidth}
  >
    <ReviewInput
      type="checkbox"
      value={reviewId}
      onChange={onSelect}
    />
    {children}
  </ReviewLabel>
);
export default SelectReview;
