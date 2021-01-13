import React from 'react';
import {
  ReviewTitleContainer,
  ReviewTitleText,
  ReviewTitleMetaData,
  ReviewTitleTotalReviewMetaData,
  CautionLectureSVG,
} from './ReviewTitle.style';

type PropType = {
  title: string;
  metadata?: string | null;
};

const ReviewTitle : React.FC<PropType> = ({ title, metadata }) => (
  <ReviewTitleContainer>
    <ReviewTitleText>{title}</ReviewTitleText>
    {title === '총평' && metadata
      ? (
        <>
          <CautionLectureSVG />
          <ReviewTitleTotalReviewMetaData>{metadata}</ReviewTitleTotalReviewMetaData>
        </>
      )
      : <ReviewTitleMetaData>{metadata}</ReviewTitleMetaData>}
  </ReviewTitleContainer>
);

ReviewTitle.defaultProps = {
  metadata: '',
};

export default ReviewTitle;
