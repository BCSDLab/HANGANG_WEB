import styled from 'styled-components';
import * as style from '@utils/css-util';

export const SemesterBorder = styled.div`
  display: flex;
  justify-content : space-between;
  align-items: center;
  width: 228px;
  height: 53px;
  margin: 16px 24px 32px 8px;
  padding : 0 20px;
  border-radius: 4px;
  border: solid 1px ${style.greyBackgroundColor};
`;
export const SemesterText = styled.span`
  height: 21px;
  margin-right: 40px;
  color: ${style.mainFontColor};
  font-family: ${style.defaultFontFamily};
  font-size: 18px;
  font-weight : 500;
`;
