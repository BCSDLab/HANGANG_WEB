import styled from 'styled-components';
import * as style from '@utils/css-util';

export const ReviewTitleContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const ReviewTitleText = styled.span`
  margin : 16px 0 0 16px;
  font-family: ${style.defaultFontFamily};
  font-size: 16px;
  font-weight: 500;
`;

export const ReviewTitleMetaData = styled.span`
  margin : 16px 0 0 8px;
  color: ${style.greyFontColor};
  font-family: ${style.defaultFontFamily};
  font-size: 12px;
`;
