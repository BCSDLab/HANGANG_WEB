import React, {
  forwardRef,
  Ref,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';

export type hashTagRefType = {
  review: { id: number; value: string; selected: boolean }[];
};

const HashTag = forwardRef((props, ref: Ref<hashTagRefType>) => {
  const [review, setReview] = useState([
    { id: 1, value: '#그저그러함', selected: true },
    { id: 2, value: '#학점왤케짜', selected: false },
    { id: 3, value: '#리얼수면제', selected: false },
    { id: 4, value: '#수업개빡셈', selected: false },
    { id: 5, value: '#배운거많음', selected: false },
    { id: 6, value: '#좋은교수님', selected: false },
    { id: 7, value: '#진심꿀과목', selected: false },
    { id: 8, value: '#이거듣지마', selected: false },
    { id: 9, value: '#조금아쉬움', selected: false },
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
            } else {
              if (prevReview.filter((option) => option.selected).length === 3)
                return option;
              else return { ...option, selected: true };
            }
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
      <ReviewTitle title="해시태그" metadata="1~3개 선택" />
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
export default HashTag;
