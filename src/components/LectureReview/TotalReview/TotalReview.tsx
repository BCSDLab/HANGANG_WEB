import React from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import Comment from '@components/LectureReview/Comment/Comment';
import Stars from './Stars/Stars';

const TotalReview = () => {
  return (
    <section>
      <ReviewTitle title="총평" />
      <Stars />
      <Comment />
    </section>
  );
};

export default TotalReview;
