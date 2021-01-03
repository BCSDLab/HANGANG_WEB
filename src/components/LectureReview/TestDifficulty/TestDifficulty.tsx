import React, {
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
  useCallback,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type testDifficultyRefType = {
  review: { id: number; value: string; selected: boolean }[];
};

const TestDifficulty = forwardRef((props, ref: Ref<testDifficultyRefType>) => {
  const [review, setReview] = useState([
    { id: 1, value: '상', selected: true },
    { id: 2, value: '중', selected: false },
    { id: 3, value: '하', selected: false },
  ]);

  const select = useCallback(
    (selectedOption: { id: number; value: string; selected: boolean }) => {
      if (selectedOption.selected === true) return;
      setReview((prevReview) =>
        prevReview.map((option) => {
          if (option.selected) return { ...option, selected: false };
          else if (option.id === selectedOption.id)
            return { ...option, selected: true };
          return option;
        })
      );
    },
    []
  );

  useImperativeHandle(ref, () => ({
    review,
  }));

  return (
    <section>
      <ReviewTitle title="시험 난이도" />
      {review.map((data) => {
        return (
          <SelectReview key={data.id} reviewData={data} onSelect={select} />
        );
      })}
    </section>
  );
});

export default TestDifficulty;
