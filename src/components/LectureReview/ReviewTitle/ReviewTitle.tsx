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

const ReviewTitle : React.FC<PropType> = ({ title, metadata }) => (
  <ReviewTitleContainer>
    <ReviewTitleText>{title}</ReviewTitleText>
    <ReviewTitleMetaData>{metadata}</ReviewTitleMetaData>
  </ReviewTitleContainer>
);

ReviewTitle.defaultProps = {
  metadata: '',
};

export default ReviewTitle;
