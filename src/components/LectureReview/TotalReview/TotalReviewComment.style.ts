import styled from 'styled-components';
import * as style from '@utils/css-util';

const CommentBox = styled.textarea.attrs({
  placeholder: `이 강의에 대한 총평을 자유롭게 적어주세요!
(시험정보, 과제정보, 팁 등)
  
허위사실이나 지나친 비방 내용을 작성할 시, 
승인이 불가할 수 있습니다.
  `,
})`
  display:block;
  width: calc(100% - 64px);
  height: 128px;
  margin: auto;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background-color: ${style.greyBackgroundColor};
  color : ${style.mainFontColor};
  font-size: 14px;
  font-family: ${style.defaultFontFamily};
  outline: none;
  resize: none;
`;

export default CommentBox;
