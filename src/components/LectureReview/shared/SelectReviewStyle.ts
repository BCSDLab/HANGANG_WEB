import styled from 'styled-components';

export const ReviewButton = styled.button`
  width: 64px;
  height: 32px;
  margin: 16px 0 32px 16px;
  border-radius: 20px;
  font-weight: normal;
  border: none;
  outline: none;
  background-color: ${(props) => {
    if (props.id === 1) {
      return '#238bfe';
    } else {
      return '#eeeeee';
    }
  }};
  color: ${(props) => {
    if (props.id === 1) {
      return '#ffffff';
    } else {
      return '#222222';
    }
  }};
`;
