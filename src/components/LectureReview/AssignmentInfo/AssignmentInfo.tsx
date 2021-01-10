import React, {
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type AssignmentInfoRefType = {
  selectedReview: number[];
};

const review = [
  { id: 1, value: '팀플' },
  { id: 2, value: '레포트' },
  { id: 3, value: '토론' },
  { id: 4, value: '퀴즈' },
];

const AssignmentInfo = forwardRef<AssignmentInfoRefType>(
  (_props, ref) => {
    const [selectedReview, setSelectedReview] = useState([1]);

    const select = (selectedId : number) => {
      if (selectedReview.includes(selectedId)) {
        if (selectedReview.length === 1) return;
        setSelectedReview(selectedReview.filter((id) => id !== selectedId));
      } else {
        setSelectedReview([...selectedReview, selectedId]);
      }
    };

    useImperativeHandle(ref, () => ({
      selectedReview,
    }), [selectedReview]);

    return (
      <div>
        <ReviewTitle title="과제정보" metadata="중복선택" />
        {review.map((data) => (
          <SelectReview
            key={data.id}
            isSelected={selectedReview.some((id) => id === data.id)}
            reviewData={data}
            onSelect={select}
          />
        ))}
      </div>
    );
  },
);

export default AssignmentInfo;
