import React, {
  forwardRef,
  Ref,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type assignmentInfoRefType = {
  review: { id: number; value: string; selected: boolean }[];
};

const AssignmentInfo = forwardRef((props, ref: Ref<assignmentInfoRefType>) => {
  const [review, setReview] = useState([
    { id: 1, value: '팀플', selected: true },
    { id: 2, value: '레포트', selected: false },
    { id: 3, value: '토론', selected: false },
    { id: 4, value: '퀴즈', selected: false },
  ]);

  const select = useCallback(
    (selectedOption: { id: number; value: string; selected: boolean }) => {
      setReview((prevReview) =>
        prevReview.map((option) => {
          if (option.id === selectedOption.id) {
            if (option.selected) {
              if (prevReview.filter((option) => option.selected).length === 1)
                return option;
              else return { ...option, selected: false };
            } else return { ...option, selected: true };
          }
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
      <ReviewTitle title="과제정보" metadata="중복선택" />
      {review.map((data) => {
        return (
          <SelectReview key={data.id} reviewData={data} onSelect={select} />
        );
      })}
    </section>
  );
});

export default AssignmentInfo;
