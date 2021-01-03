import React, {
  forwardRef,
  Ref,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type gradeRatioRefType = {
  review: { id: number; value: string; selected: boolean }[];
};

const GradeRatio = forwardRef((props, ref: Ref<gradeRatioRefType>) => {
  const [review, setReview] = useState([
    { id: 1, value: '후하게주심', selected: true },
    { id: 2, value: '적당히주심', selected: false },
    { id: 3, value: '아쉽게주심', selected: false },
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
      <ReviewTitle title="성적비율" />
      {review.map((data) => {
        return (
          <SelectReview
            key={data.id}
            reviewData={data}
            onSelect={select}
            largeWidth={true}
          />
        );
      })}
    </section>
  );
});

export default GradeRatio;
