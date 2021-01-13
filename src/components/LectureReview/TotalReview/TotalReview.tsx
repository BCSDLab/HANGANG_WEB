import React, {
  useState, useImperativeHandle, forwardRef, useRef,
} from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import Submit from '@components/LectureReview/TotalReview/SubmitButton/Submit';
import CommentBox from './TotalReviewComment.style';
import { StarsContainer, StarsBox } from './TotalReviewStars.style';
import Star from './Star/Star';
import BaseStar from './BaseStar/BaseStar';
import LectureReviewCommentPlaceholder from '../../../style/style';

const HALFSTARWIDTH = 30;

export type TotalRefType = {
  starReview : number;
  commentReview : string;
};

const TotalReview = forwardRef<TotalRefType>((_props, ref) => {
  const [starReview, setStarReview] = useState(7);
  const [commentReview, setCommentReview] = useState('');
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const onChangeCommentHandler = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentReview(e.target.value);
  };

  useImperativeHandle(ref, () => ({
    starReview,
    commentReview,
  }), [starReview, commentReview]);

  const starClick = (e : React.MouseEvent<HTMLDivElement>) => {
    const absolutePosition = e.pageX - e.currentTarget.getBoundingClientRect().left;
    setStarReview(Math.floor(absolutePosition / HALFSTARWIDTH) + 1);
  };

  return (
    <>
      <ReviewTitle title="총평" metadata={!commentReview ? '아직 작성이 완료되지 않았습니다.' : null} />
      <StarsContainer className="container">
        <BaseStar />
        <StarsBox onClick={starClick}>
          <Star starReviewPoint={starReview} />
        </StarsBox>
      </StarsContainer>
      <CommentBox
        value={commentReview}
        ref={commentRef}
        rows={5}
        cols={33}
        placeholder={LectureReviewCommentPlaceholder}
        onChange={onChangeCommentHandler}
      />
      <Submit isComplete={!!commentReview} />
    </>
  );
});

export default TotalReview;
