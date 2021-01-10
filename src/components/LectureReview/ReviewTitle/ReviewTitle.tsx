import React from 'react';
import {
  ReviewTitleContainer,
  ReviewTitleText,
  ReviewTitleMetaData,
} from './ReviewTitle.style';

type PropType = {
  title: string;
  metadata ?: string | null;
};

const ReviewTitle : React.FC<PropType> = ({ title, metadata }) => (
  <ReviewTitleContainer>
    <ReviewTitleText>{title}</ReviewTitleText>
    {metadata && <ReviewTitleMetaData totalReview={metadata === '아직 작성이 완료되지 않았습니다.'}>{metadata}</ReviewTitleMetaData>}
  </ReviewTitleContainer>
);

ReviewTitle.defaultProps = {
  metadata: '',
};

export default ReviewTitle;
