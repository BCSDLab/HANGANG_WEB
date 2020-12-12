import React from 'react';
import { ReviewButton } from './SelectReviewStyle';

type PropType = {
  metadata: string;
  id: number;
};

const SelectReview = ({ metadata, id }: PropType) => {
  return <ReviewButton id={id}>{metadata}</ReviewButton>;
};
export default SelectReview;
