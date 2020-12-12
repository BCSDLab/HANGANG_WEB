import React from 'react';
import { ReviewTitleText } from './ReviewTitleStyle';

type PropType = {
  title: string;
};

const ReviewTitle = ({ title }: PropType) => {
  return <ReviewTitleText>{title}</ReviewTitleText>;
};

export default ReviewTitle;
