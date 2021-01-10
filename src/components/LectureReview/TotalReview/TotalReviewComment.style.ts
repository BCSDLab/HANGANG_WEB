import styled from 'styled-components';
import * as style from '@utils/css-util';

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CommentBox = styled.textarea`
  width: 460px;
  height: 152px;
  padding: 30px;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  color : ${style.greyFontColor};
  font-size: 16px;
  font-weight : bold;
  outline: none;
  resize: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${style.greyFontColor};
    font-weight : bold
  }
  :-ms-input-placeholder {
     color: ${style.greyFontColor};
     font-weight : bold
  }
`;
