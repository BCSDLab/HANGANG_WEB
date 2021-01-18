import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';
import TestDifficultyContainer from './TestDifficulty.style';

export type TestDifficultyRefType = {
  selectedReview : number;
};

const review = [
  { id: 1, value: '상' },
  { id: 2, value: '중' },
  { id: 3, value: '하' },
];

const TestDifficulty = forwardRef<TestDifficultyRefType>(
  (_props, ref) => {
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
        <ReviewTitle title="시험 난이도" />
        <TestDifficultyContainer>
          {review.map((data) => (
            <SelectReview
              key={data.id}
              isSelected={selectedReview === data.id}
              reviewId={data.id}
              onSelect={select}
            >
              {data.value}
            </SelectReview>
          ))}
        </TestDifficultyContainer>
      </>
    );
  },
);

export default TestDifficulty;
