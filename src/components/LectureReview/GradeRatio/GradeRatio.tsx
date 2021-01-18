import React, {
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';
import GradeRatioContainer from './GradeRatio.style';

export type GradeRatioRefType = {
  selectedReview : number;
};

const review = [
  { id: 1, value: '후하게주심' },
  { id: 2, value: '적당히주심' },
  { id: 3, value: '아쉽게주심' },
];

const GradeRatio = forwardRef<GradeRatioRefType>((_props, ref) => {
  const [selectedReview, setSelectedReview] = useState(1);

  const select = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = +e.target.value;
    if (selectedId === selectedReview) return;
    setSelectedReview(selectedId);
  };
  useImperativeHandle(ref, () => ({
    selectedReview,
  }), [selectedReview]);
  return (
    <>
      <ReviewTitle title="성적비율" />
      <GradeRatioContainer>
        {review.map((data) => (
          <SelectReview
            key={data.id}
            isSelected={selectedReview === data.id}
            reviewId={data.id}
            onSelect={select}
            largeWidth
          >
            {data.value}
          </SelectReview>
        ))}
      </GradeRatioContainer>
    </>
  );
});

export default GradeRatio;
