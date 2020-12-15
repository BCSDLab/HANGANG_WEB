import React from 'react';
import ReviewTitle from '../shared/ReviewTitle';
import Stars from './Stars/Stars';

type PropType = {
  metadata: { id: number; value: string }[];
};

const TotalReview = ({ metadata }: PropType) => {
  return (
    <section>
      <ReviewTitle title="총평" />
      <Stars metadata={metadata} />
    </section>
  );
};

export default TotalReview;
