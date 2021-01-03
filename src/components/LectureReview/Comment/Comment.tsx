import React from 'react';
import { CommentContainer, CommentBox } from './Comment.style';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentBox
        rows={5}
        cols={33}
        placeholder="이 강의에 대한 총평을 자유롭게 적어주세요!&#13;&#10;(시험정보, 과제정보, 팁 등)&#13;&#10;허위사실이나 지나친 비방 내용을 작성할 시,&#13;&#10;승인이 불가할 수 있습니다.
  "
      />
    </CommentContainer>
  );
};
export default Comment;
