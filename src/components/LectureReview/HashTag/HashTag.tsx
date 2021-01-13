import React, {
  forwardRef,
  useState,
  useImperativeHandle,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import SelectReview from '@components/LectureReview/SelectReview/SelectReview';
import HashTagContainer from './HashTag.style';

export type HashTagRefType = {
  selectedReview: number[];
};

const review = [
  { id: 1, value: '#그저그러함' },
  { id: 2, value: '#학점왤케짜' },
  { id: 3, value: '#리얼수면제' },
  { id: 4, value: '#수업개빡셈' },
  { id: 5, value: '#배운거많음' },
  { id: 6, value: '#좋은교수님' },
  { id: 7, value: '#진심꿀과목' },
  { id: 8, value: '#이거듣지마' },
  { id: 9, value: '#조금아쉬움' },
];

const HashTag = forwardRef<HashTagRefType>((_props, ref) => {
  const [selectedReview, setSelectedReview] = useState([1]);

  const select = (selectedId : number) => {
    if (selectedReview.includes(selectedId)) {
      if (selectedReview.length === 1) return;
      setSelectedReview(selectedReview.filter((id) => id !== selectedId));
    } else {
      if (selectedReview.length === 3) return;
      setSelectedReview([...selectedReview, selectedId]);
    }
  };

  useImperativeHandle(ref, () => ({
    selectedReview,
  }), [selectedReview]);

  return (
    <>
      <ReviewTitle title="해시태그" metadata="1~3개 선택" />
      <HashTagContainer>
        {review.map((data) => (
          <SelectReview
            key={data.id}
            isSelected={selectedReview.includes(data.id)}
            reviewId={data.id}
            onSelect={select}
            largeWidth
          >
            {data.value}
          </SelectReview>
        ))}
      </HashTagContainer>
    </>
  );
});
export default HashTag;
