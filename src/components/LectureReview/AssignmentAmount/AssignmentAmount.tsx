import React, {
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type AssignmentAmountRefType = {
  selectedReview: number;
};

const review = [
  { id: 1, value: '상' },
  { id: 2, value: '중' },
  { id: 3, value: '하' },
];

const AssignmentAmount = forwardRef<AssignmentAmountRefType>(
  (_props, ref) => {
    const [selectedReview, setSelectedReview] = useState(1);

    const select = (selectedId:number) => {
      if (selectedId === selectedReview) return;
      setSelectedReview(selectedId);
    };

    useImperativeHandle(ref, () => ({
      selectedReview,
    }), [selectedReview]);

    return (
      <div>
        <ReviewTitle title="과제량" />
        {review.map((data) => (
          <SelectReview
            key={data.id}
            isSelected={selectedReview === data.id}
            reviewData={data}
            onSelect={select}
          />
        ))}
      </div>
    );
  },
);
export default AssignmentAmount;
