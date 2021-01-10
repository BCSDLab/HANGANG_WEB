import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import ReviewTitle from '@components/LectureReview/ReviewTitle/ReviewTitle';
import { CommentContainer, CommentBox } from './TotalReviewComment.style';
import { StarsContainer, StarsBox } from './TotalReviewStars.style';
import Star from './Star/Star';
import BaseStar from './BaseStar/BaseStar';
import Submit from '@components/LectureReview/TotalReview/SubmitButton/Submit';

const HALFSTARWIDTH = 30;

export type totalRefType = {
  starReview : number;
  commentReview : string;
};
type PropsType = {};

const TotalReview = forwardRef<totalRefType, PropsType>((_props, ref) => {
  const [starReview, setStarReview] = useState(7);
  const [commentReview, setCommentReview] = useState<string>('');
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const onChangeCommentHandler = (e : React.ChangeEvent<HTMLTextAreaElement>) =>{ 
    setCommentReview(e.target.value);
  }

  useImperativeHandle(ref, () => ({
    starReview,
    commentReview,
  }), [starReview, commentReview]);
  

  const starClick = (e : React.MouseEvent<HTMLDivElement>) => {
    const absolutePosition = e.pageX - e.currentTarget.getBoundingClientRect().left;
    setStarReview(Math.floor(absolutePosition / HALFSTARWIDTH) + 1)
  }

  return (
    <div>
      <ReviewTitle title="총평" metadata={ !commentReview && '아직 작성이 완료되지 않았습니다.'} />
      <StarsContainer className="container">
        <BaseStar />
       <StarsBox onClick={starClick}>
          <Star starReviewPoint={starReview} />
        </StarsBox>
      </StarsContainer>
      <CommentContainer>
      <CommentBox
        value={commentReview}
        ref={commentRef}
        rows={5}
        cols={33}
        placeholder="이 강의에 대한 총평을 자유롭게 적어주세요!&#13;&#10;(시험정보, 과제정보, 팁 등)&#13;&#10;허위사실이나 지나친 비방 내용을 작성할 시,&#13;&#10;승인이 불가할 수 있습니다."
        onChange={onChangeCommentHandler}
      />
    </CommentContainer>
    <Submit isComplete={ commentReview ? true : false}/>
    </div>
  );
});

export default TotalReview;
