import React, {
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type gradeRatioRefType = {
  selectedReview : number;
};
type PropsType = {};

const review = [
  { id: 1, value: '후하게주심' },
  { id: 2, value: '적당히주심' },
  { id: 3, value: '아쉽게주심' },
];

const GradeRatio = forwardRef<gradeRatioRefType, PropsType>((_props, ref) => {
  const [selectedReview, setSelectedReview] = useState(1);

  const select = (selectedId : number) => {
    if (selectedId === selectedReview) return;
    setSelectedReview(selectedId);
  };
  useImperativeHandle(ref, () => ({
    selectedReview,
  }), [selectedReview]);
  return (
    <div>
      <ReviewTitle title="성적비율" />
      {review.map((data) => (
        <SelectReview
          key={data.id}
          isSelected={selectedReview === data.id}
          reviewData={data}
          onSelect={select}
          largeWidth
        />
      ))}
    </div>
  );
});

export default GradeRatio;
