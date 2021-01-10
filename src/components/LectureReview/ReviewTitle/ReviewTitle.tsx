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

const ReviewTitle = ({ title, metadata }: PropType) => (
  <ReviewTitleContainer>
    <ReviewTitleText>{title}</ReviewTitleText>
    {metadata && <ReviewTitleMetaData totalReview={metadata === '아직 작성이 완료되지 않았습니다.'}>{metadata}</ReviewTitleMetaData>}
  </ReviewTitleContainer>
);

export default ReviewTitle;
