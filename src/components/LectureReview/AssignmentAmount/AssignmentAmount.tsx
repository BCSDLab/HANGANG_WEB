import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  Ref,
  useCallback,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type assignmentAmountRefType = {
  review: { id: number; value: string; selected: boolean }[];
};

const AssignmentAmount = forwardRef(
  (props, ref: Ref<assignmentAmountRefType>) => {
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
      select,
    }));

    return (
      <section>
        <ReviewTitle title="과제량" />
        {review.map((data) => {
          return (
            <SelectReview key={data.id} reviewData={data} onSelect={select} />
          );
        })}
      </section>
    );
  }
);
export default AssignmentAmount;
