import styled from 'styled-components';
import * as style from '@utils/css-util';

const CommentBox = styled.textarea`
  display:block;
  width: 480px;
  height: 200px;
  margin: auto;
  padding: 24px;
  border: none;
  border-radius: 10px;
  background-color: #f5f5f5;
  color : ${style.mainFontColor};
  font-size: 18px;
  font-family: ${style.defaultFontFamily};
  outline: none;
  resize: none;
`;

export default CommentBox;
