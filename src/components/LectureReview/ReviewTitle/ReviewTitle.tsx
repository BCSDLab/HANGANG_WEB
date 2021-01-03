import React from 'react';
import {
  ReviewTitleContainer,
  ReviewTitleText,
  ReviewTitleMetaData,
} from './ReviewTitle.style';

type PropType = {
  title: string;
  metadata?: string;
};

const ReviewTitle = ({ title, metadata }: PropType) => {
  return (
    <ReviewTitleContainer>
      <ReviewTitleText>{title}</ReviewTitleText>
      {metadata && <ReviewTitleMetaData>{metadata}</ReviewTitleMetaData>}
    </ReviewTitleContainer>
  );
};

export default ReviewTitle;
