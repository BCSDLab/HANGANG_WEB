import styled from 'styled-components';
import * as style from '@utils/css-util';

type StylePropType = {
  totalReview : boolean;
};

export const ReviewTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ReviewTitleText = styled.h3`
  margin: 16px 5px 16px 8px;
  font-family: ${style.defaultFontFamily};
  font-size: 20px;
`;

export const ReviewTitleMetaData = styled.h2<StylePropType>`
  margin-left: 10px;
  color: ${({ totalReview }) => (totalReview ? style.yellowColor : style.greyFontColor)};
  font-size: 14px;
`;
